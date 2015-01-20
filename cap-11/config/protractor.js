exports.config = {
  specs: ['../test/e2e/**/*.js'],
  onPrepare: function() {
    browser.driver.get('http://localhost:3000');
    browser.driver.findElement(by.id('entrar')).click();
    browser.driver.findElement(by.id('login_field'))
    	.sendKeys('usuarioDoGitHub');
    browser.driver.findElement(by.id('password'))
    	.sendKeys('senhaUsuarioGithub');
    browser.driver.findElement(by.name('commit')).click();  
  }
};