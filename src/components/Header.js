import React from 'react';

const Header = () => {
  return  <header className='py-8' style={{marginBottom:'0px'}} >
          <div className='container mx-auto'  >
            <div class="flex justify-between items-center" >
              <a href="google.com">
                <p className='text-[50px]' style={{fontWeight:'bold'}}>Subodh Sharma</p>
              </a>

              <button className='btn btn-sm' >Work With Me</button>
            </div>
          </div>
          </header>
};

export default Header;
// {style={{ display:'flex', flex:'5',gap:'50rem', justifyContent:'between'}}}
