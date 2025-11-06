const updates = [
	<div>
		<h3 className="update-date">11/5/2025</h3>
		<div>
			Dear Patients,
			<br/><br/>
			We are trying to make payment for services as easy as possible. With the ever-changing ways insurance companies 
			are reimbursing doctors and patients, we felt we would try to simplify the process. We will now be recommending 
			patients pay for services at the time of treatment as follows:

			<ul>
				<li>
					Patients without insurance will pay at time of services</li>
				<li>
					Patients whose insurance sends payment to them will be expected to pay for services in full that day. When 
					the patient receives the insurance check they can then cash the check and keep the money.
				</li>
				<li>
					If patients need a payment plan to pay for their services, this can be arranged with either Lisa or Tracy.
				</li>
				<li>
					Patients with outstanding balances will be expected to pay their balance at time of service unless other arrangements 
					were made.
				</li>
			</ul>
			We spend a great deal of time on the phones with these insurance companies and it is complicated and time consuming. This will help.
			<br/><br/>
			Thanks for your cooperation,
			<br/><br/>
			R. Jeffrey Kisiel and Staff
		</div>
	</div>,
	<div>
		<h3 className="update-date">1/7/2024</h3>
		<div>
		Dear Patients,
		<br/><br/>
		As cold and flu season continues into the new year we continue to use the lessons we've learned from our 
		COVID response to ensure everyone's safety.
		<br/><br/>
		If you're feeling under the weather on the day of your appointment, please notify the office so we can reschedule 
		you to a later date. Hand sanitizer and all hand-washing stations are still readily available; we encourage you to 
		use both frequently.
		<br/><br/>Additionally, we ask that all patients plan to arrive at the office around 15 minutes before their 
		scheduled appointment to allow time for filling out forms and handling administrative processes. If you already know 
		what forms you need to fill out, you can download them on <a href="/forms">this page</a>, print them out, and bring 
		them already filled-in to the office. If you have questions or are unsure of what forms you need, our staff will be  
		happy to assist you.
		<br/><br/>
		Sincerely,
		<br/><br/>
		R. Jeffrey Kisiel and Staff
		</div>
	</div>
];

export default () => {
    return (
        <div className="page-content">
            <h1 className="tab-header">Latest Updates</h1>
			{updates}
		</div>
    );
};