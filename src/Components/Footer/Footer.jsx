// Footer.jsx
import { useLocation } from "react-router-dom";
import styles from './Footer.module.css';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


function Footer() {
    const location = useLocation();
  const [showTop, setShowTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={
        location.pathname === "/cart" ? "cart-footer" : "default-footer"
      }
    >
      <section>
        <div className={styles.top_footer}>
          <span
            onClick={scrollToTop}
            className={`${styles.back_to_top} ${showTop ? styles.visible : ""}`}
          >
            Back to top
          </span>
        </div>

        <div className={styles.middle_footer}>
          <div className={styles.footer_column}>
            <h3>Get to Know Us</h3>
            <ul>
              <li>
                <Link to="">Careers</Link>
              </li>
              <li>
                <Link to="">Amazon Newsletter</Link>
              </li>
              <li>
                <Link to="">About Amazon</Link>
              </li>
              <li>
                <Link to="">Accessibility</Link>
              </li>
              <li>
                <Link to="">Sustainability</Link>
              </li>
              <li>
                <Link to="">Press Center</Link>
              </li>
              <li>
                <Link to="">Investor Relations</Link>
              </li>
              <li>
                <Link to="">Amazon Devices</Link>
              </li>
              <li>
                <Link to="">Amazon Science</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer_column}>
            <h3>Make Money with Us</h3>
            <ul>
              <li>
                <Link to="">Sell on Amazon</Link>
              </li>
              <li>
                <Link to="">Sell apps on Amazon</Link>
              </li>
              <li>
                <Link to="">Protect & Build Your Brand</Link>
              </li>
              <li>
                <Link to="">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="">Become a Delivery Driver</Link>
              </li>
              <li>
                <Link to="">Start a Package Delivery Business</Link>
              </li>
              <li>
                <Link to="">Advertise Your Products</Link>
              </li>
              <li>
                <Link to="">Self-Publish with Us</Link>
              </li>
              <li>
                <Link to="">Become an Amazon Hub Partner</Link>
              </li>
              <li>
                <Link to="">› See More Ways to Make Money</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer_column}>
            <h3>Amazon Payment Products</h3>
            <ul>
              <li>
                <Link to="">Amazon Visa</Link>
              </li>
              <li>
                <Link to="">Amazon Store Card</Link>
              </li>
              <li>
                <Link to="">Amazon Secured Card</Link>
              </li>
              <li>
                <Link to="">Amazon Business Card</Link>
              </li>
              <li>
                <Link to="">Shop with Points</Link>
              </li>
              <li>
                <Link to="">Credit Card Marketplace</Link>
              </li>
              <li>
                <Link to="">Reload Your Balance</Link>
              </li>
              <li>
                <Link to="">Gift Cards</Link>
              </li>
              <li>
                <Link to="">Amazon Currency Converter</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footer_column}>
            <h3>Let Us Help You</h3>
            <ul>
              <li>
                <Link to="">Your Account</Link>
              </li>
              <li>
                <Link to="">Your Orders</Link>
              </li>
              <li>
                <Link to="">Shipping Rates & Policies</Link>
              </li>
              <li>
                <Link to="">Amazon Prime</Link>
              </li>
              <li>
                <Link to="">Returns & Replacements</Link>
              </li>
              <li>
                <Link to="">Manage Your Content and Devices</Link>
              </li>
              <li>
                <Link to="">Recalls and Product Safety Alerts</Link>
              </li>
              <li>
                <Link to="">Registry & Gift List</Link>
              </li>
              <li>
                <Link to="">Help</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.logo_Lang_Flag}>
          <div className={styles.footer__logo}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
              />
            </Link>
          </div>

          <div className={styles.english}>English</div>
          <div className={styles.english}>
            <Link to="">
              <img src="/images/usa.png" alt="" />
              United States
            </Link>
          </div>
        </div>

        <div className={styles.bottom_footer}>
          <div className={styles.footer_links}>
            <div className={styles.footer_category}>
              <h4>Amazon Music</h4>
              <Link to="">
                Stream millions <br></br>of songs
              </Link>{" "}
              <br />
              <br />
              <h4>Amazon Business</h4>
              <Link to="">
                Everything For <br></br>Your Business
              </Link>
              <br />
              <br />
              <h4>Goodreads</h4>
              <Link to="">
                Book reviews <br></br>& <br></br>recommendations
              </Link>
              <br />
              <br />
              <h4>Amazon Resale</h4>
              <Link to="">
                Great Deals on <br></br>Quality Used<br></br> Products
              </Link>
              <br />
              <br />
            </div>

            <div className={styles.footer_category}>
              <h4>Amazon Ads</h4>
              <Link to="">
                Reach customers <br></br>wherever they <br></br>spend their time
              </Link>
              <br />
              <br />
              <h4>Amazon Fresh</h4>
              <Link to="">
                Groceries & More <br></br>Right To Your Door{" "}
              </Link>
              <br />
              <br />
              <h4>IMDb</h4>
              <Link to="">
                Movies, TV &<br></br> Celebrities
              </Link>
              <br />
              <br />
              <h4>
                Whole Foods <br></br>Market
              </h4>
              <Link to="">
                America’s <br></br>Healthiest <br></br>Grocery Store
              </Link>
              <br />
              <br />
              <h4>Neighbors App</h4>
              <Link to="">
                Real-Time Crime <br></br>& Safety Alerts
              </Link>
              <br />
              <br />
            </div>

            <div className={styles.footer_category}>
              <h4>6pm</h4>
              <Link to="">
                Score deals <br></br>on fashion brands
              </Link>
              <br />
              <br />
              <h4>AmazonGlobal</h4>
              <Link to="">
                Ship Orders <br></br>Internationally
              </Link>
              <br />
              <br />
              <h4>IMDbPro</h4>
              <Link to="">
                Get Info <br></br>Entertainment<br></br> Professionals Need
              </Link>
              <br />
              <br />
              <h4>Woot!</h4>
              <Link to="">
                Deals and <br></br>Shenanigans
              </Link>
              <br />
              <br />
              <h4>
                Amazon Subscription <br></br>Boxes
              </h4>
              <Link to="">
                Top subscription <br></br>boxes – right to<br></br> your door
              </Link>
              <br />
              <br />
            </div>

            <div className={styles.footer_category}>
              <h4>AbeBooks</h4>
              <Link to="">
                Books, art &<br></br> collectibles
              </Link>
              <br />
              <br />
              <h4>Home Services</h4>
              <Link to="">
                Experienced Pros <br></br>Happiness<br></br> Guarantee
              </Link>
              <br />
              <br />
              <h4>
                Kindle Direct <br></br>Publishing
              </h4>
              <Link to="">
                Indie Digital & <br></br>Print Publishing<br></br> Made Easy
              </Link>
              <br />
              <br />
              <h4>Zappos</h4>
              <Link to="">
                Shoes & <br></br>Clothing
              </Link>
              <br />
              <br />
              <h4>PillPack</h4>
              <Link to="">
                Pharmacy <br></br>Simplified
              </Link>
              <br />
              <br />
            </div>

            <div className={styles.footer_category}>
              <h4>ACX</h4>
              <Link to="">
                Audiobook <br></br>Publishing <br></br>Made Easy
              </Link>
              <br />
              <br />
              <h4>
                Amazon Web <br></br>Services
              </h4>
              <Link to="">
                Audiobook <br></br>Publishing <br></br>Made Easy
              </Link>
              <br />
              <br />
              <h4>Amazon Photos</h4>
              <Link to="">
                Unlimited Photo <br></br>Storage Free <br></br>With Prime
              </Link>
              <br />
              <br />
              <h4>Ring</h4>
              <Link to="">
                Smart Home <br></br>Security Systems
              </Link>
              <br />
              <br />
              <h4>
                Amazon <br></br>Renewed
              </h4>
              <Link to="">
                Like-new <br></br>products you <br></br>can trust{" "}
              </Link>
              <br />
              <br />
            </div>

            <div className={styles.footer_category}>
              <h4>Sell on Amazon</h4>
              <Link to="">
                Start a Selling <br></br>Account
              </Link>
              <br />
              <br />
              <h4>Audible</h4>
              <Link to="">
                Listen to Books <br></br>& Original Audio<br></br> Performances{" "}
              </Link>
              <br />
              <br />
              <h4>
                Prime Video <br></br>Direct
              </h4>
              <Link to="">
                Video Distribution <br></br>Made Easy
              </Link>
              <br />
              <br />
              <h4>WiFi</h4>
              <Link to="">
                Stream 4K <br></br>Video in <br></br>Every Room{" "}
              </Link>
              <br />
              <br />
            </div>

            <div className={styles.footer_category}>
              <h4>Veeqo</h4>
              <Link to="">
                Shipping <br></br>Software <br></br>Inventory <br></br>
                Management
              </Link>
              <br />
              <br />
              <h4>
                Box Office <br></br>Mojo
              </h4>
              <Link to="">
                Find Movie <br></br>Box Office <br></br>Data
              </Link>
              <br />
              <br />
              <h4>Shopbop</h4>
              <Link to="">
                Designer <br></br>Fashion <br></br>Brands
              </Link>
              <br />
              <br />
              <h4>Blink</h4>
              <Link to="">
                Smart Security <br></br>for Every Home
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className={styles.copyright_sec}>
          <div>
            <Link to="">Conditions of Use</Link>
          </div>
          <div>
            <Link to="">Privacy Notice</Link>
          </div>
          <div>
            <Link to="">Consumer Health Data Privacy Disclosure</Link>
          </div>
          <div>
            <Link to="">Your Ads Privacy Choices</Link>
          </div>
          <div className={styles.footer_icon}>icon</div>
          <br /> {/* Forces a new line */}
          <div className={styles.year}>
            &copy; 1996-2025, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;