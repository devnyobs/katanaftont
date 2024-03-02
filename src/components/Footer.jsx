import '../main.css'

function Footer() {
  return (
    <div className="footercontainer" >
        <div className="logofooter">L</div>
        <div className="footercard">
            <ul><li className='footercardtitle' >Quick Links</li></ul>
            <ul className='contentlistfooter'>
                <li className='footerelement' >Event</li>
                <li className='footerelement' >Sermons</li>
                <li className='footerelement' >Testify</li>
                <li className='footerelement' >Contact</li>
                <li className='footerelement' >Bible</li>
            </ul>
        </div>
        <div className="footercard">
            <ul><li className='footercardtitle'>Social Ledia</li></ul>
            <ul className='contentlistfooter'>
                <li className='footerelement' >Facebook</li>
                <li className='footerelement' >Instagram</li>
                <li className='footerelement' >Youtube</li>
                <li className='footerelement' >Whatsap</li>
            </ul>
        </div>
        <div className="footercard">
            <ul><li className='footercardtitle'>Contact Us</li></ul>
            <ul className='contentlistfooter'>
                <li className='footerelement' >+237 696 896 758</li>
                <li className='footerelement' >+32 470 927 870</li>
                <li className='footerelement' >goulibam@gmail.com</li>
                <li className='footerelement' >Contact</li>
            </ul>
        </div>
        .copyright
    </div>
  )
}

export default Footer