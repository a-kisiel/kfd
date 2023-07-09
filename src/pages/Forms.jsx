import '../css/forms.css';

export default () => {
    return (
        <div className="page-content">
            <h1 className="tab-header">Online Forms</h1>
			<div> 
				In an effort to save everyone time at the office, we've made some forms available online. Simply print what you need and fill it out
				whenever.
			</div>

            <div>
                Currently, this site only provides the PDF versions of forms, and as a result will never ask for any personal information; be careful handing such information out online.<br/><br/>New patients should download, print, and fill out the <strong>New Patient Questionnaire</strong>, then bring it in to the office so we can enter their information in our books.
            </div>

            <h2>Available Forms</h2>
            <div className="forms-list">
                <a href="../Forms/New Patient Packet.pdf" target="_blank" title="New Patient Form" className="form-link" download> New Patient Form </a>
                <a href="../Forms/Health History.pdf" target="_blank" title="Health History" className="form-link" download> Health History </a>
                <a href="../Forms/HIPAA.pdf" target="_blank" title="HIPAA" className="form-link" download> HIPAA </a>
                <a href="../Forms/Medication List.pdf" target="_blank" title="Medication List" className="form-link" download> Medication List </a>
                <a href="../Forms/Patient Screening.pdf" target="_blank" title="Patient Screening" className="form-link" download> Patient Screening </a>
            </div>	

            <h2>Troubleshooting</h2>
            <div> 
                If at any point in the process you find that you're having some difficulty, feel free to <a href="tel:15187922364">give us a call</a>, stop in at the office, or send us an email at <a href="mailto:kisieldent@gmail.com">kisieldent@gmail.com</a>.
			</div>

            <div>
                The download process for these forms may vary slightly depending on your internet browser, but the differences are minor (and the process itself is fairly easy):
                <br/><br/>
                Upon clicking the respective form link below, a new tab containing the form PDF should open. Look for the printer icon in the PDF reader window, and it should lead you through the process of printing. If you'd prefer to save the document, use the 'download' button instead.
            </div>

            <h2>FAQs</h2>
            <h3 className="question">
                I don't see the form I need — what should I do?
            </h3>
            <div>
                If you require a specific form that isn't listed below, either send us an email at <a href="mailto:kisieldent@gmail.com">kisieldent@gmail.com</a> or stop by the 
                office and we'll give you a paper copy.
            </div>
            <h3 className="question">
                There was a problem with my download/I'm having some other technical difficulties.
            </h3>
            <div>
                First, check where your browser displays your downloaded content (for Google Chrome a box pops up in the bottom left corner, for Firefox the download shows up in the top right). If it's not there try downloading again (sometimes the button doesn't register on first click). If that doesn't work, <a href="mailto:kisieldent@gmail.com">send us an email</a> and we can send you a direct PDF for the form.
                <br/><br/>
                If all else fails, you can always come to the office in person and pick up a paper copy.
            </div>
		</div>
    );
};