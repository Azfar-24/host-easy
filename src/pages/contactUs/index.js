import LetConnect from 'components/letConnect';
import SectionWrap from 'components/sectionWrap';
import Anchor from 'components/ui/anchor';
import Button from 'components/ui/button';
import CustomLink from 'components/ui/customLink';
import InputField from 'components/ui/inputField';
import InputTextarea from 'components/ui/inputTextarea';
import SelectField from 'components/ui/selectField';
import ToastMessage from 'components/ui/toastMessage';
import ValidationText from 'components/ui/validationText';
import React from 'react';

const ContactUs = ({ data }) => {
  return (
    <>
      <section className='main__container--fluid'>
        <div className='contactUs__grid'>
          <div className='contactUs__grid-lhs'>
            <SectionWrap
              customCls={'contactUs__section'}
              heading={{
                heading: 'Contact Us',
                textAlign: 'left'
              }}
              caption={{
                data: [
                  'Have questions or need assistance? Reach out to us—we’re here to help make your event unforgettable.'
                ],
                textAlign: 'left'
              }}
            >
              <div className='contactUs__form'>
                <div className='contactUs__form-row'>
                  <div className='contactUs__form-grid'>
                    <div className='contactUs__form-item'>
                      <InputField
                        labelConfig={{
                          inputLbl: 'First Name of Host',
                          inputId: 'fName_host'
                        }}
                        handleInput={() => {}}
                        components={<ValidationText validationText={'error msg'} />}
                      />
                    </div>
                    <div className='contactUs__form-item'>
                      <InputField
                        labelConfig={{
                          inputLbl: 'Last Name of Host',
                          inputId: 'lName_host'
                        }}
                        handleInput={() => {}}
                        components={false && <ValidationText validationText={'error msg'} />}
                      />
                    </div>
                  </div>
                </div>
                <div className='contactUs__form-row'>
                  <div className='contactUs__form-grid'>
                    <div className='contactUs__form-item'>
                      <InputField
                        labelConfig={{
                          inputLbl: 'Contact Numbert',
                          inputId: 'contactNumber_host'
                        }}
                        handleInput={() => {}}
                        components={<ValidationText validationText={'error msg'} />}
                        extraAttri={{
                          type: 'tel',
                          inputmode: 'numeric'
                        }}
                      />
                    </div>
                    <div className='contactUs__form-item'>
                      <InputField
                        labelConfig={{
                          inputLbl: 'Email ID',
                          inputId: 'email_id_host'
                        }}
                        handleInput={() => {}}
                        components={<ValidationText validationText={'error msg'} />}
                        extraAttri={{
                          type: 'email',
                          inputmode: 'email'
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className='contactUs__form-row'>
                  <div className='contactUs__form-grid'>
                    <div className='contactUs__form-item'>
                      <SelectField
                        labelConfig={{
                          inputLbl: 'What service are you looking for?',
                          inputID: 'numbering_system'
                        }}
                        parentExtraCls={'select__native'}
                        options={[
                          {
                            categoryLbl: 'Guest Count',
                            category: [
                              {
                                value: 1,
                                label: '5 - 10 guests'
                              },
                              { value: 2, label: '10 - 20 guests' }
                            ]
                          }
                        ]}
                      />
                    </div>
                  </div>
                </div>
                <div className='contactUs__form-row'>
                  <div className='contactUs__form-grid'>
                    <div className='contactUs__form-item'>
                      <InputTextarea
                        labelConfig={{
                          inputLbl: 'Message',
                          inputId: 'message_host'
                        }}
                        handleInput={() => {}}
                        components={<ValidationText validationText={'error msg'} />}
                      />
                    </div>
                  </div>
                </div>
                <div className='contactUs__form-row'>
                  <div className='contactUs__form-grid'>
                    <div className='contactUs__form-item'>
                      <div className='contactUs__form-cta'>
                        <Button variant={'primaryDark'}>Submit</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {false && <ToastMessage open={true} type={''} message={'Form Submit Successfully'} />}
              <div className='contactUs__notes'>
                <div className='contactUs__dtls'>
                  <div>
                    <div className='contactUs__dtls-lbl'>Holiday Surcharge</div>
                    <div className='contactUs__dtls-value'>
                      <p>
                        Please note that during peak holiday periods, a small surcharge may apply to
                        our standard rates. This allows us to continue providing excellent service
                        during times of increased demand. Specific dates and details will be
                        communicated at the time of booking or inquiry.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className='contactUs__dtls-value'>
                      <CustomLink redirectionURL={'/tnc'} variant={'primaryLightLink'}>
                        Cancellation Policy <i className='he1-arrow_outward'></i>
                      </CustomLink>
                      <CustomLink redirectionURL={'/faq'} variant={'primaryDarkLink'}>
                        Need Help? Read our FAQs
                      </CustomLink>
                    </div>
                  </div>
                </div>
              </div>
            </SectionWrap>
          </div>
          <div className='contactUs__grid-rhs'>
            <LetConnect />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
