const forgotPasswordTemplate = ({ name, otp}) => {
    return `
    
    <div>
         <p>Dear, ${name}</p>
         <p> You are requested a password reset. Please us following OTP code to 
         reset your password,</p>
         <div style="background: yellow;font-size:20px;padding:20px;text-align:centre;font-weight:800;">
            ${otp}
          </div>
          <p> This otp is valid for 1 hour only. Enter this otp in the blinkyit website to proceed with resetting your 
              password.</p>
              <br/>
              </br>
              <p> Thanks</p>
              <p>Blinkyit</p>   
    </div>
    
    `
}

export default forgotPasswordTemplate