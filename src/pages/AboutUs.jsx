export default () => {
    return (
        <div class="page-content">
			<h1 class="tab-header">About Us</h1>

            <div class="bio-container">
				<div class="bio-image"></div>
                <div class="bio-content">
                    <h2>Dr. Kisiel</h2>
                    <div>
                        Dr. Raymond "Jeff" Kisiel grew up in Clinton, NY, a small town near Utica. He graduated from Clinton High School in 1982,
                        Hamilton College in 1986, and SUNY of Buffalo Dental School in 1990. He then extended his education with a dental residency 
                        at Buffalo General Hospital in 1991.<br/><br/>
                        In March 1991, Dr. Kisiel became an associate with Dr. Harvey Dearstyne, eventually buying his practice in January 1993. 
                        He practiced on Pearl Street in Glens Falls until March 2003, when he moved to his current office in Queensbury.
                    </div>
                </div>

				{/* <img src="../Pictures/moi.jpg" class="bio-image" />
				<h2 class="bio-content">Tracy Arquette</h2>
				<p class="bio-content">
					Tracy has been our trusted 'do-everything' assistant for 24 years. She is well-loved by staff and patients alike (and a large 
					part of why people keep coming back to our office!).
				</p> */}
			</div>
			

			<h2>Hours</h2>
            Tuesday: 8:15am - 5:00pm<br/>
            Wednesday 8:15am - 3:00pm<br/>
            Thursday 8:15am - 5:00pm<br/>
            Friday 8:15am - 2:00pm<br/><br/>
            Special arrangements may be made for early-morning or late afternoon in emergency cases.

			<h2>Location</h2>
			<div id="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11605.868678542274!2d-73.657034!3d43.3463377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb1511dc5a1cd1c12!2sDr.%20Raymond%20J.%20Kisiel%2C%20DDS!5e0!3m2!1sen!2sus!4v1607261522466!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>		
			</div>
		</div>
    );
};