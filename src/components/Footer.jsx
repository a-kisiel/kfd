import '../css/footer.css';

export default function () {
    return (
        <div className="footer">
            <div className="split-footer">
                <div className="hours">
                    <h2>Hours</h2>
                    <div className="day-time"><div>Tuesday</div><div>8:15am - 5:00pm</div></div>
                    <div className="day-time"><div>Wednesday</div><div>8:15am - 3:00pm</div></div>
                    <div className="day-time"><div>Thursday</div><div>8:15am - 5:00pm</div></div>
                    <div className="day-time"><div>Friday</div><div>8:15am - 2:00pm</div></div>
                    <br/><br/>
                    Special arrangements may be made for early-morning or late afternoon in emergency cases.
                </div>
                <div className="map">
                    <h2>Location</h2>
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11605.868678542274!2d-73.657034!3d43.3463377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1511dc5a1cd1c12!2sDr.%20Raymond%20J.%20Kisiel%2C%20DDS!5e0!3m2!1sen!2sus!4v1607261522466!5m2!1sen!2sus" width="550" height="400" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>		
                    </div>
                </div>
            </div>
            <div className="divide-line"></div>
            <div className="address-phone"><a href="https://goo.gl/maps/ffc3SB6NDo3Tx5DX6" target="_blank">14 Baywood Dr&nbsp;|&nbsp;Queensbury, NY 12804</a>&nbsp;|&nbsp;<a href="tel:+15187922364">(518) 792-2364</a></div>
        </div>
    );
};