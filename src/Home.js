import React,{useState, useEffect,Suspense} from 'react'
import HamburgerMenu from 'react-hamburger-menu';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import './Home.css';
import night_city from './static/night_city.MOV';
import mk from './static/MK.mp4';
import video from './static/LunaMK.mp4';
import kote from './static/kote.mp4';
import anim from './static/anim.mp4';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Home() {
     const [open, setOpen] = useState(false)
     const { t, i18n } = useTranslation();
     const lang = localStorage.getItem('lang') || 'en'

     const handleClick = (()=> {
        setOpen(!open);
    })
    
    const change = (option)=> {
 
     localStorage.setItem('lang', option.target.value);
     window.location.reload()
    }

useEffect(() => {
  i18next.changeLanguage(lang)
}, [])

   return (
       <Suspense onChange={change} value={lang}>
        <div className='home'>
           <header className='header'>
               <div className='header__left'>
               <duv className='header__menu'>
                 <HamburgerMenu
                isOpen={open}
                menuClicked={handleClick}
                width={25}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
                />
                </duv>  
               <div className='header__logo'>
               <img alt ='tik tok' src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-dark-e95da587b6efa1520dcd11f4b45c0cf6.svg'
                  />
                <img alt ='tik tok' src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg'
                  />
                 
               </div>
               </div>


               <div className='header__right'>
                   <div className='header__upload'>
                  <CloudUploadIcon  fontSize='large' />
                  </div>
                 <Button variant="danger">{t('button.Login')}</Button> 
               </div>
           </header>
           <main className='main'>
             <div className='main__title'>
            
             <h1>{t('title_h1.home')}</h1>
             <h2>{t("title_h2.home")}</h2>
             </div>


             <div className='main__videos'>
               <div className='player' >
             <video  className='video__player' muted  autoPlay loop  src={night_city}
               ></video>
                <Button variant="danger" className='video__button'>{t('button.Login')}</Button> 
                </div >
                <div className='player'>
              <video className='video__player' muted  autoPlay  loop src={mk}
               ></video>
               <Button variant="danger" className='video__button'>{t('button.Login')}</Button> 
               </div>
               <div className='player'>
                <video className='video__player' muted  autoPlay  loop src={kote}
               ></video>
                <Button variant="danger" className='video__button'>{t('button.Login')}</Button> 
               </div>
               <div  className='player'>
                <video className='video__player' muted  autoPlay loop  src={anim}
               ></video>
               <Button variant="danger" className='video__button'>{t('button.Login')}</Button> 
               </div>
               <div  className='player'>
                <video className='video__player' muted  autoPlay  loop src={video}
               ></video>
               <Button variant="danger" className='video__button'>{t('button.Login')}</Button> 
               </div>
             </div>
           </main>
           <footer >
               <div className='footer'>
           <div className='footer__logo'>
           <img alt ='tik tok' src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg'/>
                <img alt ='tik tok' src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg'
                  />
                 </div>
                 <div className='footer__text'>
                     <div className='footer__column'>
                     <ul>
                         <li><strong>Company</strong></li>
                         <li>About TikTok</li>
                         <li>Newsroom</li>
                         <li>Contact</li>
                         <li>Careers</li>
                     </ul>
                     </div>
                     <div className='footer__column'>
                     <ul>
                         <li><strong>Programs</strong></li>
                         <li>TikTok for Good</li>
                         <li>Advertise on TikTok</li>
                         <li>TikTok for developer</li>
                         
                    </ul>
                    </div>
                    <div className='footer__column'>
                    <ul>
                         <li><strong>Resources</strong></li>
                         <li>Help Center</li>
                         <li>Safety Center</li>
                         <li>Community Guidelines</li>
                         <li>Transparency</li>
                     </ul>
                     </div> 
                     <div className='footer__column'>
                     <ul>
                         <li><strong>Legal</strong></li>
                         <li>Cookies Policy</li>
                         <li>Intellectual Property Policy</li>
                         <li>Law enforcement</li>
                         <li>Terms of Service</li>
                        </ul>
                    </div>
                 </div>
                 </div>
                 <div  className='footer__lower'>
                     <select onChange={change} value={lang} style={{height:"50px",width:"130px", background:'transparent', color: 'white', padding: '10px'}}>
                     <option value="en">ENGLISH</option>
                      <option value="ru">РУССКИЙ</option>
                      </select>
                      <div className='footer__copyright'>
                     <p>© 2020 CloneTikTok from Alexa</p>
                 </div>
                 </div>
           </footer>
        </div>
      </Suspense>
    )
}

export default Home
