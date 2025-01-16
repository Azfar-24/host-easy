import LetConnect from 'components/letConnect';
import SectionWrap from 'components/sectionWrap';
import Button from 'components/ui/button';
import CustomLink from 'components/ui/customLink';
import InputField from 'components/ui/inputField';
import InputTextarea from 'components/ui/inputTextarea';
import SelectField from 'components/ui/selectField';
import ToastMessage from 'components/ui/toastMessage';
import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const ContactUs = ({ data }) => {
  const schema = yup.object({
    fName_host: yup.string().required('First name is required'),
    lName_host: yup.string().required('Last name is required'),
    contactNumber_host: yup
      .string()
      .matches(/^\d{10}$/, 'Contact must be a 10-digit number')
      .required('Contact number is required'),
    email_id_host: yup.string().email('Invalid email').required('Email is required'),
    guest_count_host: yup
      .number()
      .required('Select Guest count')
      .typeError('Select Guest count')
      .notOneOf([0, ''], 'Select Guest count'),
    message_host: yup
      .string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required')
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className='contactUs__form-row'>
                    <div className='contactUs__form-grid'>
                      <div className='contactUs__form-item'>
                        <InputField
                          labelConfig={{
                            inputLbl: 'First Name of Host',
                            inputId: 'fName_host'
                          }}
                          handleInput={() => {}}
                          registerfuction={register}
                          validationConfig={{ errMsg: errors?.fName_host?.message }}
                          inputValidate={errors?.fName_host?.message}
                        />
                      </div>
                      <div className='contactUs__form-item'>
                        <InputField
                          labelConfig={{
                            inputLbl: 'Last Name of Host',
                            inputId: 'lName_host'
                          }}
                          handleInput={() => {}}
                          registerfuction={register}
                          validationConfig={{ errMsg: errors?.lName_host?.message }}
                          inputValidate={errors?.lName_host?.message}
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
                          registerfuction={register}
                          validationConfig={{ errMsg: errors?.contactNumber_host?.message }}
                          inputValidate={errors?.contactNumber_host?.message}
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
                          registerfuction={register}
                          validationConfig={{ errMsg: errors?.email_id_host?.message }}
                          inputValidate={errors?.email_id_host?.message}
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
                            inputID: 'guest_count_host'
                          }}
                          parentExtraCls={'select__native'}
                          options={[
                            {
                              categoryLbl: 'Guest Count',
                              category: [
                                {
                                  value: '',
                                  label: 'Guest Count'
                                },
                                {
                                  value: 1,
                                  label: '5 - 10 guests'
                                },
                                { value: 2, label: '10 - 20 guests' }
                              ]
                            }
                          ]}
                          registerFunction={register}
                          validationConfig={{ errMsg: errors?.email_id_host?.message }}
                          inputValidate={errors?.email_id_host?.message}
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
                          registerfuction={register}
                          validationConfig={{ errMsg: errors?.message_host?.message }}
                          inputValidate={errors?.message_host?.message}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='contactUs__form-row'>
                    <div className='contactUs__form-grid'>
                      <div className='contactUs__form-item'>
                        <div className='contactUs__form-cta'>
                          <Button type='submit' variant={'primaryDark'}>
                            Submit
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
