import MailchimpSubscribe from "react-mailchimp-subscribe";
import {Newsletter} from "./Newsletter"
import React from 'react';

export const MailChimpForm = () => {
    const postUrl=`${process.env.REACT_APP_MAILCHIMP_URL}!`;
    // console.log(postUrl)
  return (
   <>
     <MailchimpSubscribe 
          url={postUrl}
          render={({subscribe,status,message})=>(
            <Newsletter
              status={status}
              message={message}
              onValidated={formData => subscribe(formData)}
            />

          )}
           
           />
   </>
  )
}

