import React from 'react';
import { FormRow, Fieldset } from '../../_common/components/forms.jsx';

const BitcoinVoucher = () => (
    <div id='voucher_container' className='invisible'>
        <h1>{it.L('Bitcoin Voucher')}</h1>
        <p>{it.L('Descriptions')}</p>
        <div id='form_container' className='gr-padding-10 invisible'>
            <form className='form js-form' action='http://www.123formbuilder.com/form-3295599/Bitcoin-Voucher' id='mainform123' method='post' name='mainform123' encType='multipart/form-data' noValidate>
                <Fieldset legend='Details'>
                    <FormRow type='label' id='lbl_loginid' label={it.L('Login ID:')} />
                    <FormRow type='label' id='lbl_email' label={it.L('Email:')} />
                    <FormRow type='text' id='id123-control36043409' label={it.L('Amount (USD):')} attributes={{ name: 'control36043409' }} />
                </Fieldset>

                <div className='center-text'>
                    <button className='button' type='submit' id='id123-button-send'>{it.L('Send')}</button>
                    <p className='errorfield invisible' id='error-account-opening'></p>
                </div>

                <input id='id123-control36043376' name='control36043376' type='hidden' value=''  />
                <input id='id123-control36043400' name='control36043400' type='hidden' value=''  />

                <input type='hidden' name='action' value='verify'/>
                <input type='hidden' size='30' name='viewformr' id='viewformr' value='cfr_1514876794.494' />
                <input type='hidden' name='f_autoresponder' id='f_autoresponder' value='0'/>
                <input type='hidden' name='special_autoresponder' id='special_autoresponder' value=''/>
                <input type='hidden' id='language' name='language' value='en'/>
                <input type='hidden' id='language-changed' name='languageChanged' value='no'/>
                <input type='hidden' name='go_back_and_edit' id='go_back_and_edit' value='0' />
                <input type='hidden' name='submissionUniqueId' value='pending_5a4b2f7a7afce' />
                <input type='hidden' name='hiddenfields' id='hiddenfields' value=''/>
                <input type='hidden' name='hiddenfields_pages' id='hiddenfields_pages' value=''/>
                <input type='hidden' name='activepage' id='activepage' value='1'/>
                <input type='hidden' name='totalpages' id='totalpages' value='1'/>
                <input type='hidden' name='nextpagenr' id='nextpagenr' value='2'/>
                <input type='hidden' name='prevpagenr' id='prevpagenr' value='0'/>
                <input type='hidden' name='usage' value='e'/>
            </form>
        </div>
        <div id='message_container' className='invisible'>
            <p className='center-text'>{it.L('Submitted successfully.')}</p>
        </div>
    </div>
);

export default BitcoinVoucher;
