//bitcoinprice.js:

// mock object:
// Module = {
//   register: function() {}
// };

Module.register("bitcoinprice",{
  defaults: {
    text: "Bitcoin Price"
  },

  start: function() {
    Log.info("Starting module: " + this.name);
  },

  // Override dom generator.
  getDom: function() {
    Log.log("bitcoinprice: getDom(): called");
    var wrapper = document.createElement("div");
    var html = '<h3>'+this.config.text+'</h3>';
    var resp = getApi('/getprice');
    html += 'Bitcoin Price as of <span class="bitcoinprice">'
      + resp.time.updated
      + '</span>:&nbsp;<span class="bitcoinprice">'
      + resp.bpi.USD.rate_float
      +'</span><br/><small><a href="https://www.coindesk.com/price/bitcoin">Powered by CoinDesk</a></small>';
    wrapper.innerHTML = html;
    return wrapper;
  }

  // this.name String  The name of the module.
  // this.identifier String  This is a unique identifier for the module instance.
  // this.hidden Boolean This represents if the module is currently hidden (faded away).
  // this.config Boolean The configuration of the module instance as set in the user's config.js file. This config will also contain the module's defaults if these properties are not over-written by the user config.
  // this.data Object  The data object contain additional metadata about the module instance. (See below)
  //   this.data.classes - The classes which are added to the module dom wrapper.
  //   this.data.file - The filename of the core module file.
  //   this.data.path - The path of the module folder.
  //   this.data.header - The header added to the module.
  //   this.data.position - The position in which the instance will be shown.
});
