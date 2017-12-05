const Home        = require('./home');
const TabSelector = require('../../_common/tab_selector');

const HomeBeta = (() => {
    const onLoad = () => {
        Home.onLoad();
        TabSelector.init(['market_tabs', 'account_tabs'], true);
    };

    const onUnLoad = () => {
        TabSelector.clean();
    };

    return {
        onLoad,
        onUnLoad,
    };
})();

module.exports = HomeBeta;