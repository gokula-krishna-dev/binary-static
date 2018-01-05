import React from 'react';
import Title from '../_common/components/title.jsx';
import AntiClickjack from '../_common/includes/anti_clickjack.jsx';
import Favicons from '../_common/includes/favicons.jsx';

const BinaryJapan = () => (
    <html>
        <head>
            <AntiClickjack />

            <meta httpEquiv='Content-Type' content='text/html;charset=UTF-8' />
            <meta httpEquiv='Content-Language' content={it.language} />
            <meta name='description' content={`${it.broker_name} gives everyone an easy way to participate in the financial markets. Trade with as little as $1 USD on major currencies, stocks, indices, and commodities.`} />
            <meta name='keywords' content='binary options, forex, forex trading, online trading, financial trading, binary trading, index trading, trading indices, forex trades, trading commodities, binary options strategy, binary broker, binary bet, binary options trading platform, binary strategy, finance, stocks, investment, trading' />
            <meta name='author' content={it.broker_name} />
            <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' />
            <meta name='dcterms.rightsHolder' content={it.broker_name} />
            <meta name='dcterms.rights' content={it.broker_name} />
            <meta property='og:title' content={it.broker_name} />
            <meta property='og:type' content='website' />
            <meta property='og:image' content={it.url_for('images/common/og_image.gif')} />

            <Title />

            <Favicons />

            <link href={`${it.url_for('css/japan.css')}?${it.static_hash}`} rel='stylesheet' />
            <link href={`https://style.binary.com/binary.css?${it.static_hash}`} rel='stylesheet' />
        </head>

        <body>
        <div className='navbar-fixed-top' role='navigation' id='navigation'>
            <div className='container'>
                <div className='navbar-header'>
                    <span id='toggle-menu' href='button' className='navbar-toggle'></span>
                    <a className='navbar-brand logo' href={it.url_for('home')}></a>
                </div>
                <div className='navbar-collapse'>
                    <ul className='nav navbar-nav'>
                        <li className='invisible'>
                            <a href='#page-top'></a>
                        </li>
                        <li>
                            <img className='' src={it.url_for('images/japan/version1/fsa-logo@2x.png')} />
                        </li>
                        <li>
                            <img className='' src={it.url_for('images/japan/version1/binarykk-logo@2x.png')} />
                        </li>
                        <li>
                            <img className='' src={it.url_for('images/japan/version1/jsf@2x.png')} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <section id='page-top' className='intro'>
            <div className='intro-body container'>
                <div className='gr-row'>
                    <div className='gr-6 gr-12-m'>
                        <h1 className='intro-text'>{it.L('{JAPAN ONLY}Binary Options', it.website_name)}</h1>
                        <img className='responsive' src={it.url_for('images/japan/version1/pair.svg')} />
                        <h3 className='intro-subtext'>{it.L('{JAPAN ONLY}Now you can trade fx markets using binary options with one of the origical pioneers of binary options worldwide')}</h3>
                        <form className='signup-form'>
                            <div className='signup-form-input'>
                                <div className='input-group'>
                                    <input autoComplete='off' name='email' id='email' maxLength='50' type='email' placeholder={it.L('{JAPAN ONLY}Enter your email')} />
                                    <span className='error-msg center-text invisible'>{it.L('{JAPAN ONLY}This field is required')}</span>
                                    <button type='submit' id='btn-submit-email'><span>{it.L('{JAPAN ONLY}Account Opening')}</span></button>
                                </div>
                            </div>
                            <div className='signup-form-success invisible'>
                                <p>{it.L('{JAPAN ONLY}Thank you for signing up! Please check your email to complete the registration process.')}</p>
                            </div>
                        </form>
                    </div>
                    <div className='gr-6 gr-12-m'>
                        <img className='responsive' src={it.url_for('images/japan/version1/retro.svg')} />
                    </div>
                </div>
                <h1 className='center-text content-inverse-color'>{it.L('{JAPAN ONLY}What are Binary Options?')}</h1>
            </div>
        </section>

        <section className='pattern pattern-wave spacing'>
            <div className='container'>
            <div className='section-title'>
                <h1 className='rounded-bubble'>{it.L('{JAPAN ONLY}What?')}</h1>
                <h1 className='bg-blue'>{it.L('{JAPAN ONLY}What trading options do we have?')}</h1>
            </div>
            <h2 className='color-blue text-bold'>{it.L('{JAPAN ONLY}Binary option offer the chance to predit whether the future price of a FX will be above or below a target rate, or between, or outside a target range:')}</h2>
            <div className='gr-row cards cards--numbered'>
                <div className='gr-6 gr-10-m gr-push-1-m'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='gr-row'>
                                <div className='gr-6 gr-12-m'>
                                    <img className='responsive' src={it.url_for('images/japan/version1/higher-lower-1.svg')} />
                                </div>
                                <div className='gr-6 gr-12-m'>
                                    <img className='responsive' src={it.url_for('images/japan/version1/higher-lower-2.svg')} />
                                </div>
                            </div>
                            <div className='icon-pair'>
                                <span className='icon-sm icon-1'></span>
                                <span className='icon-sm icon-2'></span>
                            </div>
                            <h4 className='color-orange text-bold'>{it.L('{JAPAN ONLY}Ladder Options')}</h4>
                            <p>{it.L('{JAPAN ONLY}At the time of the judgement time predice the judgement rate above the barrier price or below the barrier price')}</p>
                        </div>
                        <div className='card-footer'>
                            <p>{it.L('{JAPAN ONLY}We offer a minimum trading period of 2 hours up to 1 year')}</p>
                        </div>
                    </div>
                </div>
                <div className='gr-6 gr-10-m gr-push-1-m'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='gr-row'>
                                <div className='gr-6 gr-12-m'>
                                    <img className='responsive' src={it.url_for('images/japan/version1/touch-notouch-1.svg')} />
                                </div>
                                <div className='gr-6 gr-12-m'>
                                    <img className='responsive' src={it.url_for('images/japan/version1/touch-notouch-2.svg')} />
                                </div>
                            </div>
                            <div className='icon-pair'>
                                <span className='icon-sm icon-3'></span>
                                <span className='icon-sm icon-4'></span>
                            </div>
                            <h4 className='color-orange text-bold'>{it.L('{JAPAN ONLY}Touch Options')}</h4>
                            <p>{it.L('{JAPAN ONLY}We predict whether market price will touch barrier price by the end of trading period')}</p>
                        </div>
                        <div className='card-footer'>
                            <p>{it.L('{JAPAN ONLY}We will offer a minimum trading period of one week up to one year')}</p>
                        </div>
                    </div>
                </div>
                <div className='gr-6 gr-10-m gr-push-1-m'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='gr-row'>
                                <div className='gr-6 gr-12-m'>
                                    <img className='responsive' src={it.url_for('images/japan/version1/in-out-1.svg')} />
                                </div>
                                <div className='gr-6 gr-12-m'>
                                    <img className='responsive' src={it.url_for('images/japan/version1/in-out-2.svg')} />
                                </div>
                            </div>
                            <div className='icon-pair'>
                                <span className='icon-sm icon-5'></span>
                                <span className='icon-sm icon-6'></span>
                            </div>
                            <h4 className='color-orange text-bold'>{it.L('{JAPAN ONLY}Range Options: End-In / End-Out')}</h4>
                            <p>{it.L('{JAPAN ONLY}At the judgement time, predit the judgement rate to be less thatn the upper limit barrier and above the lower limit barrier, or above the upper limit barrier or below the lower limit barrier')}</p>
                        </div>
                        <div className='card-footer'>
                            <p>{it.L('{JAPAN ONLY}We will offer a minimum trading period of one week up to one year')}</p>
                        </div>
                    </div>
                </div>
                <div className='gr-6 gr-10-m gr-push-1-m'>
                    <div className='card'>
                        <div className='card-body'>
                        <div className='gr-row'>
                            <div className='gr-6 gr-12-m'>
                                <img className='responsive' src={it.url_for('images/japan/version1/in-out-3.svg')} />
                            </div>
                            <div className='gr-6 gr-12-m'>
                                <img className='responsive' src={it.url_for('images/japan/version1/in-out-4.svg')} />
                            </div>
                        </div>
                        <div className='icon-pair'>
                            <span className='icon-sm icon-1'></span>
                            <span className='icon-sm icon-2'></span>
                        </div>
                        <h4 className='color-orange text-bold'>{it.L('{JAPAN ONLY}Range Option: Stay-In / Break-Out')}</h4>
                        <p>{it.L('{JAPAN ONLY}It predicts whether the market price during the trading period is less than the upper limit barrier and maintains the lower limit barrier excess, or becomes equal to or higher than the upper limit barrier or belowe the lower limit barrier')}</p>
                        </div>
                        <div className='card-footer'>
                            <p>{it.L('{JAPAN ONLY}We will offer a minimum trading period of one week up to one year')}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <section className='pattern pattern-polkadots'>
            <div className='section-title'>
                <h1 className='rounded-bubble'>{it.L('{JAPAN ONLY}How?')}</h1>
                <h1 className='bg-blue'>{it.L('{JAPAN ONLY}Trade with 3 simple steps')}</h1>
            </div>
            <div className='container'>
                <div className='gr-row cards'>
                    <div className='gr-4 gr-12-m'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='bg-bubble'>{it.L('{JAPAN ONLY}Set exchange rate')}</h4>
                                <img className='equal-height' src={it.url_for('images/japan/version1/coin.svg')} />
                            </div>
                        </div>
                    </div>
                    <div className='gr-4 gr-12-m'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='bg-bubble'>{it.L('{JAPAN ONLY}Set amount (lot number)')}</h4>
                                <img className='equal-height' src={it.url_for('images/japan/version1/slider.svg')} />
                            </div>
                        </div>
                    </div>
                    <div className='gr-4 gr-12-m'>
                        <div className='card'>
                            <div className='card-body'>
                                <h4 className='bg-bubble'>{it.L('{JAPAN ONLY}Higher/lower rate')}</h4>
                                <img className='equal-height' src={it.url_for('images/japan/version1/high-low.svg')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern-geometric'>
            <div className='section-title'>
                <h1 className='bg bg-ribbon'>{it.L('{JAPAN ONLY}Fast execution with one click')}</h1>
            </div>
            <div className='container'>
                <div className='gr-row'>
                    <div className='gr-6 gr-12-m center-text'>
                        <div className='bg bg-bubble-box'>
                            <h1>{it.L('{JAPAN ONLY}High speed execution')}</h1>
                        </div>
                        <img className='' src={it.url_for('images/japan/version1/bg-light-blue.svg')} />
                    </div>
                    <div className='gr-4 gr-12-m flex-end'>
                        <div className=''>
                            <h2 className='color-orange text-bold'>{it.L('{JAPAN ONLY}You can purchase a trade with one click')}</h2>
                            <p>{it.L('{JAPAN ONLY}Just switch this button to prevent misoperation')}</p>
                            <img className='' src={it.url_for('images/japan/version1/lock-switch.svg')} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern pattern-confetti fill-bg-color'>
            <div className='section-title'>
                <h1 className='bg-orange'>{it.L('{JAPAN ONLY}Why choose binary options over foreign exchange')}</h1>
            </div>
            <div className='container'>
                <h2 className='center-text color-blue text-bold'>{it.L('{JAPAN ONLY}A binary option can provide profit opportunities even in a small price range, where FX normally doesn’t. Here is a table comparison of foreign exchange and binary options:')}</h2>
                <div className='gr-row cards'>
                    <div className='gr-5 gr-push-1 gr-12-m gr-push-0-m'>
                        <div className='card--light'>
                            <div className='card-header__bubble'>
                                <h3>{it.L('{JAPAN ONLY}Foreign exchange one cancellation order - profit take & stop-loss order')}</h3>
                            </div>
                            <div className='card-body'>
                                <div className='gr-row flex-space-between'>
                                    <div className='box-o'>
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/jpy.svg')} />
                                        <span className='size-3'>{it.L('{JAPAN ONLY}¥110.50 / lot')}</span>
                                    </div>
                                    <div className='box'>
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/clock.svg')} />
                                        <span className='size-3'>{it.L('{JAPAN ONLY}1 hour')}</span>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='box'>
                                        <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}spot')}</p>
                                        <p>{it.L('{JAPAN ONLY}1 lot')}</p>
                                    </div>
                                    <div>
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/ic_arrow_up.svg')} />
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/ic_arrow_down.svg')} />
                                    </div>
                                    <div>
                                        <div className='box'>
                                            <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}profit take sell')}</p>
                                            <p className='color-red'>{it.L('{JAPAN ONLY}¥110.65')}</p>
                                        </div>
                                        <div className='box'>
                                            <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}stop-loss sell')}</p>
                                            <p className='color-light-blue'>{it.L('{JAPAN ONLY}¥110.40')}</p>
                                        </div>
                                    </div>
                                </div>
                                <span className='card-divider'></span>
                                <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}1 lot = $ 100,000, margin: ')}</p>
                                <p className='size-2'>{it.L('{JAPAN ONLY}Profit / loss per point (0.01) = ¥ 1,000')}</p>
                                <p className='bg-gray size-3'>{it.L('{JAPAN ONLY}1 lot: Stop loss: - ¥ 10,000 | Get profit: ¥ 15,000')}</p>
                                <div className='flex'>
                                    <img className='icon-md' src={it.url_for('images/japan/version1/sad-face.svg')} />
                                    <p className='color-light-blue'>{it.L('{JAPAN ONLY}Margin: ¥ 442,000')}
                                        <br />
                                        {it.L('{JAPAN ONLY}Maximum loss: not guaranteed')}</p>
                                </div>
                                <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}$ 100,000 x 110.50 (USD / JPY) x 4% (margin calculation) = ¥ 442,000')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='gr-5 gr-push-1 gr-12-m gr-push-0-m'>
                        <div className='card--light'>
                            <div className='card-header__bubble'>
                                <h3>{it.L('{JAPAN ONLY}Binary option can make a higher profit, for the same risk but less margin')}</h3>
                            </div>
                            <div className='card-body'>
                                <div className='gr-row flex-space-between'>
                                    <div className='box-o'>
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/jpy.svg')} />
                                        <span className='sixe-3'>{it.L('{JAPAN ONLY}¥200 /  lot')}</span>
                                    </div>
                                    <div className='box'>
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/clock.svg')} />
                                        <span className='size-3'>{it.L('{JAPAN ONLY}1 hour')}</span>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='box'>
                                        <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}call option buy')}</p>
                                        <p>{it.L('{JAPAN ONLY}50ロット')}</p>
                                    </div>
                                    <div>
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/ic_arrow_up.svg')} />
                                        <img className='icon-sm' src={it.url_for('images/japan/version1/ic_arrow_down.svg')} />
                                    </div>
                                    <div>
                                        <div className='box'>
                                            <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}payout (if spot 110.65 or higher)')}</p>
                                            <p className='color-red'>{it.L('{JAPAN ONLY}¥1,000')}</p>
                                        </div>
                                        <div className='box'>
                                            <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}if not')}</p>
                                            <p className='color-light-blue'>{it.L('{JAPAN ONLY}¥0')}</p>
                                        </div>
                                    </div>
                                </div>
                                <span className='card-divider'></span>
                                <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}If spot rate is at above target rate at judgment time, the profil will be:')}</p>
                                <p className='size-2'>{it.L('{JAPAN ONLY}Option price assumes 1 hour to judgment time, volatility = 8.5%, spread = 40 yen')}</p>
                                <p className='bg-gray size-3'>{it.L('{JAPAN ONLY}50 lots: maximum loss: - ¥ 10,000 | target profit: ¥ 40,000')}</p>
                                <div className='flex'>
                                    <img className='icon-md' src={it.url_for('images/japan/version1/happy-face.svg')} />
                                    <p className='color-red'>{it.L('{JAPAN ONLY}Margin: ¥ 10,000')}
                                        <br />
                                        {it.L('{JAPAN ONLY}Maximum loss: guaranteed')}
                                    </p>
                                </div>
                                <p className='size-1 color-gray'>{it.L('{JAPAN ONLY}50 x ￥1,000 - 50 x ￥200 = ￥50,000 - ￥10,000 = ￥40,000')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern pattern-semicircle'>
            <div className='section-title'>
                <h1 className='bg-bubble'>{it.L('{JAPAN ONLY}Key plus point')}</h1>
            </div>
            <div  className='container'>
                <div className='gr-row cards flex-justify-content-center'>
                    <div className='gr-2 gr-4-p gr-6-m'>
                        <div className='card--light card-icon-heart'>
                            <p>{it.L('{JAPAN ONLY}trade with 50 yen to 999 yen')}</p>
                        </div>
                    </div>
                    <div className='gr-2 gr-4-p gr-6-m'>
                        <div className='card--light card-icon-heart'>
                            <p>{it.L('{JAPAN ONLY}set daily loss limit')}</p>
                        </div>
                    </div>
                    <div className='gr-2 gr-4-p gr-6-m'>
                        <div className='card--light card-icon-heart'>
                            <p>{it.L('{JAPAN ONLY}no transaction fees')}</p>
                        </div>
                    </div>
                    <div className='gr-2 gr-4-p gr-6-m'>
                        <div className='card--light card-icon-heart'>
                            <p>{it.L('{JAPAN ONLY}trade 9 currencies')}</p>
                        </div>
                    </div>
                    <div className='gr-2 gr-4-p gr-6-m'>
                        <div className='card--light card-icon-heart'>
                            <p>{it.L('{JAPAN ONLY}4 options types')}</p>
                        </div>
                    </div>
                    <div className='gr-2 gr-4-p gr-6-m'>
                        <div className='card--light card-icon-heart'>
                            <p>{it.L('{JAPAN ONLY}trading periods from 2 hours to 1 year')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern-geometric'>
            <div className='bg bg-shine-v'>
                <div className='container center-text'>
                    <div className='gr-row'>
                        <div className='gr-12'>
                            <form className='signup-form'>
                                <h1>{it.L('{JAPAN ONLY}Sign up for a free account')}</h1>
                                <div className='signup-form-input'>
                                    <div className='input-group'>
                                        <input autoComplete='off' name='email' id='email' maxLength='50' type='email' placeholder={it.L('{JAPAN ONLY}Enter your email')} />
                                        <span className='error-msg center-text invisible'>{it.L('{JAPAN ONLY}This field is required')}</span>
                                        <button type='submit' id='btn-submit-email'><span>{it.L('{JAPAN ONLY}Account Opening')}</span></button>
                                    </div>
                                </div>
                                <div className='signup-form-success invisible'>
                                    <p>{it.L('{JAPAN ONLY}Thank you for signing up! Please check your email to complete the registration process.')}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                    <h3 className='content-inverse-color'>{it.L('{JAPAN ONLY}Why Binary.com?')}</h3>
                </div>
            </div>
            <div className='container spacing'>
                <h1 className='center-text text-bold color-orange'>{it.L('{JAPAN ONLY}Easy to use design. Fast execution; multifunction charting system and smartphone optimized display.')}</h1>
                <div className='gr-row'>
                    <div className='gr-8 gr-push-1 gr-9-m gr-push-0-m'>
                        <img className='responsive' src={it.url_for('images/japan/version1/apple-macbook-pro-15@2x.jpg')} />
                    </div>
                    <div className='gr-2 gr-push-1 gr-3-m gr-push-0-m flex-end'>
                        <img className='responsive' src={it.url_for('images/japan/version1/apple-i-phone-7-silver@2x.jpg')} />
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern pattern-confetti fill-bg-color'>
            <div className='section-title'>
                <h1 className='bg-orange'>{it.L('{JAPAN ONLY}YOUR FUNDS ARE HELD SECURELY')}</h1>
            </div>
            <div  className='container'>
                <h2 className='color-blue text-bold'>{it.L('{JAPAN ONLY}All customer funds are deposited with JSF Trust & Banking, and in the event of our business failure, they will be refunde via an independent attorney acting as beneficiary agent')}</h2>
                <div className='gr-row cards'>
                    <div className='gr-5 gr-push-1 gr-12-m gr-push-0-m'>
                        <div className='card--light'>
                            <div className='card-header__bubble'>
                                <h3>{it.L('{JAPAN ONLY}Normal time')}</h3>
                            </div>
                            <div className='card-body'>
                                <img className='responsive' src={it.url_for('images/japan/version1/secure-1.svg')} />
                            </div>
                        </div>
                    </div>
                    <div className='gr-5 gr-push-1 gr-12-m gr-push-0-m'>
                        <div className='card--light'>
                            <div className='card-header__bubble'>
                                <h3>{it.L('{JAPAN ONLY}When our company collapse')}</h3>
                            </div>
                            <div className='card-body'>
                                <img className='responsive' src={it.url_for('images/japan/version1/secure-2.svg')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern pattern-semicircle'>
            <div  className='container'>
                <div className='gr-row'>
                    <div className='gr-12'>
                        <div className='card'>
                            <div className='card-header__ribbon'>
                                <h1>{it.L('{JAPAN ONLY}The learning center')}</h1>
                            </div>
                            <div className='card-body gr-row'>
                                <div className='gr-2 gr-push-1 gr-4-p gr-push-0-p gr-12-m gr-push-0-m'>
                                    <img className='img-md' src={it.url_for('images/japan/version1/customer-support.svg')} />
                                    <h3 className='size-3'>{it.L('{JAPAN ONLY}We have a support team to answer your questions: support@binary.com')}</h3>
                                </div>
                                <div className='gr-2 gr-push-3 gr-4-p gr-push-0-p gr-12-m gr-push-0-m'>
                                    <img className='img-md' src={it.url_for('images/japan/version1/accounting-book.svg')} />
                                    <h3 className='size-3'>{it.L('{JAPAN ONLY}We will give you a virtual account that already has ¥ 1,000,000.')}</h3>
                                </div>
                                <div className='gr-2 gr-push-5 gr-4-p gr-push-0-p gr-12-m gr-push-0-m'>
                                    <img className='img-md' src={it.url_for('images/japan/version1/school.svg')} />
                                    <h3 className='size-3'>{it.L('{JAPAN ONLY}Learn more about binary options for academies using webinars, ebooks, videos.')}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern pattern-polkadots fill-bg-color'>
            <div className='section-title'>
                <h1 className='rounded-bubble'>{it.L('{JAPAN ONLY}How?')}</h1>
                <h1 className='bg-blue'>{it.L('{JAPAN ONLY}How to open an account')}</h1>
            </div>
            <div className='container'>
                <div className='gr-row bubble-outline-wrapper'>
                    <div className='gr-2 gr-push-2 gr-3-p gr-push-0-p gr-6-m gr-push-0-m'>
                        <div className='bubble-outline'>
                            <span className='numbered'></span>
                            <p>{it.L('{JAPAN ONLY}Apply for an account & provide ID')}</p>
                        </div>
                        <img className='icon-lg' src={it.url_for('images/japan/version1/new-acc.svg')} />
                    </div>
                    <div className='gr-2 gr-push-2 gr-3-p gr-push-0-p gr-6-m gr-push-0-m'>
                        <div className='bubble-outline'>
                            <span className='numbered'></span>
                            <p>{it.L('{JAPAN ONLY}Take the knowledge confirmation test')}</p>
                        </div>
                        <img className='icon-lg' src={it.url_for('images/japan/version1/knowledge-test.svg')} />
                    </div>
                    <div className='gr-2 gr-push-2 gr-3-p gr-push-0-p gr-6-m gr-push-0-m'>
                        <div className='bubble-outline'>
                            <span className='numbered'></span>
                            <p>{it.L('{JAPAN ONLY}Enable account with secure e-mail')}</p>
                        </div>
                        <img className='icon-lg' src={it.url_for('images/japan/version1/secure-email.svg')} />
                    </div>
                    <div className='gr-2 gr-push-2 gr-3-p gr-push-0-p gr-6-m gr-push-0-m'>
                        <div className='bubble-outline'>
                            <span className='numbered'></span>
                            <p>{it.L('{JAPAN ONLY}Start trading after depositing money')}</p>
                        </div>
                        <img className='icon-lg' src={it.url_for('images/japan/version1/deposit-money.svg')} />
                    </div>
                </div>
            </div>
        </section>

        <section className='pattern pattern-wave'>
            <div className='container'>
                <div className='card--light'>
                    <div className='gr-row card-body flex'>
                        <div className='gr-4 gr-12-p gr-12-t gr-12-m center-text'>
                            <h3>{it.L('{JAPAN ONLY}Award-winning trading excellence')}</h3>
                        </div>
                        <img className='responsive responsive-lg' src={it.url_for('images/japan/version1/opwa.svg')} />
                        <img className='responsive responsive-lg' src={it.url_for('images/japan/version1/mena-fx-pro@2x.jpg')} />
                        <img className='responsive responsive-lg' src={it.url_for('images/japan/version1/egr-operator@2x.png')} />
                        <img className='responsive responsive-lg' src={it.url_for('images/japan/version1/t-2-w@2x.png')} />
                    </div>
                </div>
            </div>
        </section>

        <div className='bg bg-shine-rectangle'>
            <div className='container'>
                <div className='gr-row'>
                    <div className='gr-12'>
                        <form className='signup-form'>
                            <h1 className=''>{it.L('{JAPAN ONLY}Sign up for a free account')}</h1>
                            <div className='signup-form-input'>
                                <div className='input-group'>
                                    <input autoComplete='off' name='email' id='email' maxLength='50' type='email' placeholder={it.L('{JAPAN ONLY}Enter your email')} />
                                    <span className='error-msg center-text invisible'>{it.L('{JAPAN ONLY}This field is required')}</span>
                                    <button type='submit' id='btn-submit-email'><span>{it.L('{JAPAN ONLY}Account Opening')}</span></button>
                                </div>
                            </div>
                            <div className='signup-form-success invisible'>
                                <p>{it.L('{JAPAN ONLY}Thank you for signing up! Please check your email to complete the registration process.')}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <footer className='content-inverse-color'>
            <div className='primary-bg-color-dark'>
                <p>{it.L('{JAPAN ONLY} ■店頭バイナリーオプション取引は金融商品取引法に規定される店頭デリバティブ取引であり、元本や利益が保証されていません。■店頭バイナリーオプション取引は、判定時刻に自動的に権利行使されるヨーロピアンタイプと、取引期間中に決められた条件に達すると権利が自動行使されるアメリカンタイプがあります。■店頭バイナリーオプションは、外国為替相場等の変動により投資元本の全てを失うおそれのあるリスクの高い金融商品です。■判定時刻及び取引期間中における一定の権利を、オプション料を支払って購入する期限がある取引のため、権利が消滅した場合は支払ったオプション料の全額を失います。■ペイアウトは1ロットあたり1,000円です。■購入価格と売却価格にはスプレッドがあり、相場情勢により拡大することがあります。■相場情勢により、お客様が希望した価格より不利な価格で取引が成立する場合があります。■店頭バイナリーオプションの取引上限は以下のとおりです。1)1取引の取引上限は100ロット。2)1日の取引上限額は50万円。前記2)に達した時点でその日は取引ができなくなります。■取引手数料は無料。当該日から遡り12ヶ月間、新規又は売却取引がなかった場合は口座維持手数料（2,500円税込）が発生、引き続き取引等がない場合、6ヶ月毎に同額が発生します。3,000円未満を出金の際は250円（税込）の出金手数料がかかります。■オプションの購入後の注文取り消しは行う事ができませんが、取引可能期間であれば売却は可能です。ただし、購入価格と売却価格にはスプレッドがあり、売却時に損失を被る可能性があります。■お取引開始前に、契約締結前交付書面を熟読の上、必ず約款及び取扱説明書に書かれてある取引の特徴、取引条件、仕組み及びリスクを十分確認いただき、ご自身の判断と責任において、自己の計算によりお取引ください。')}</p>
            </div>
            <div className='primary-bg-color flex flex-space-between'>
                <p>{it.L('{JAPAN ONLY}【商号】Binary株式会社　金融商品取引業者　関東財務局長（金商）第2949号【加入協会】一般社団法人金融先物取引業協会 Copyright (c) 2017 Binary K.K. All Rights Reserved.')}</p>
                <img className='logo' src={it.url_for('images/japan/version1/logo-dark.svg')} />
            </div>
        </footer>

        <script src={`${it.url_for('js/landing_pages/common.js')}?${it.static_hash}`}></script>
        <script src={`${it.url_for('js/landing_pages/japan.js')}?${it.static_hash}`}></script>
        </body>
    </html>

);

export default BinaryJapan;