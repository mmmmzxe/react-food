/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"; 
import twitter from "C:/Users/marim/Desktop/shop-food/src/images/twitter.png";
import facebook from "C:/Users/marim/Desktop/shop-food/src/images/facebook.png";
import insta from "C:/Users/marim/Desktop/shop-food/src/images/instagram.png";
import './footer.css';
const Footer = () =>{
    return(
<div className="footerr">
    <div className="sb_footer section_padding">
        <div className="sb_footer-links">
            <div className="sb-footer-links_div">
                <h4>Foe Business</h4>
                <a href="#"><p>Employer</p></a>
                <a href="#"><p>Healyh plan</p></a>
                <a href="#"><p>Individual</p></a>

            </div>
            <div className="sb-footer-links_div">
                <h4>Resources</h4>
                <a href="#"><p>Resources center</p></a>
                <a href="#"><p>Testimoials</p></a>
                <a href="#"><p>STV</p></a>
        </div>
        <div className="sb-footer-links_div">
            <h4>Partners</h4> 
            <a href="#"><p>Swing Tech</p></a>
        </div>
        <div className="sb-footer-links_div">
            <h4>Company</h4> 
            <a href="#"><p>About us</p></a>
            <a href="#"><p>Press</p></a>
            <a href="#"><p>Career</p></a>
            <a href="#"><p>Contact</p></a>
        </div>
        <div className="sb-footer-links_div">
            <h4>Coming Soon</h4> 
       <p><img src={twitter}></img></p>
       <p><img src={facebook}></img></p>
       <p><img src={insta}></img></p>
       
        </div>
       <div className="sb-footer-below-links">
       <a href="#"><dive><p>Terms & Conditinos</p></dive></a>
       <a href="#"><dive><p>Privacy</p></dive></a>
       <a href="#"><dive><p>Security</p></dive></a>
       <a href="#"><dive><p> Cookie Declaration</p></dive></a>
       </div>

        </div>
    </div>
</div>
    )
}
export default Footer;