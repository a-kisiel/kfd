import '../css/aboutus.css';

export default () => {
    return (
        <div className="page-content">
			<h1 className="tab-header">About Us</h1>

            <div className="bio-container">
				<div className="bio-image"></div>
                <div className="bio-content">
                    <h2>Dr. Kisiel</h2>
                    <div>
                        Dr. Raymond "Jeff" Kisiel grew up in Clinton, NY, a small town near Utica. He graduated from Clinton High School in 1982,
                        Hamilton College in 1986, and SUNY of Buffalo Dental School in 1990. He then extended his education with a dental residency 
                        at Buffalo General Hospital in 1991.<br/><br/>
                        In March 1991, Dr. Kisiel became an associate with Dr. Harvey Dearstyne, eventually buying his practice in January 1993. 
                        He practiced on Pearl Street in Glens Falls until March 2003, when he moved to his current office in Queensbury.
                    </div>
                </div>

				{/* <img src="../Pictures/moi.jpg" className="bio-image" />
				<h2 className="bio-content">Tracy Arquette</h2>
				<p className="bio-content">
					Tracy has been our trusted 'do-everything' assistant for 24 years. She is well-loved by staff and patients alike (and a large 
					part of why people keep coming back to our office!).
				</p> */}
			</div>
		</div>
    );
};