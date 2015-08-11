
module.exports = {


  'step one' : function (browser) {
    browser
      .url('http://172.27.59.185:6001')
      .waitForElementVisible('body', 1000)
    
	 


 

  },
  
  'step two' : function (browser) {
      browser
	   .url('http://172.27.59.185:6001/api/Books')
	   .waitForElementVisible('body', 1000)
    .end();
	}
};
