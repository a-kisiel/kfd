import '../css/forms.css';

export default () => {
    return (
        <div className="page-content">
            <h1 className="tab-header">Online Forms</h1>
			<div> 
            We ask that all patients plan to arrive at the office around 15 minutes before their scheduled appointment to allow 
            time for filling out forms and handling administrative processes. If you already know what forms you need to fill 
            out, you can download them on this page, print them out, and bring them already filled-in to the office. 
            If you have questions or are unsure of what forms you need, stop by the office and our staff will be happy to 
            assist you.
			</div>
            <br/><br/>
            <div>
                Note: this site only provides the PDF versions of forms for you to print out at home and fill out by hand.
                As a result, it will never ask for any personal information — always be careful handing such information out
                online.
            </div>

            <div>
                <h2>Available Forms</h2>
                <div className="forms-list">
                    <a href="../Forms/New Patient Packet.pdf" target="_blank" title="New Patient Form" className="form-link" download> New Patient Form </a>
                    <a href="../Forms/Health History.pdf" target="_blank" title="Health History" className="form-link" download> Health History </a>
                    <a href="../Forms/HIPAA.pdf" target="_blank" title="HIPAA" className="form-link" download> HIPAA </a>
                    <a href="../Forms/Medication List.pdf" target="_blank" title="Medication List" className="form-link" download> Medication List </a>
                    <a href="../Forms/Patient Screening.pdf" target="_blank" title="Patient Screening" className="form-link" download> Patient Screening </a>
                </div>
            </div>	

            <div>
                <h2>Troubleshooting</h2>
                <div> 
                    If at any point in the process you find that you're having some difficulty, feel free to <a href="tel:15187922364">give us a call</a>, stop in at the office, or send us an email at <a href="mailto:kisieldent@gmail.com">kisieldent@gmail.com</a>.
                </div>
                <br/><br/>
                <div>
                    The download process for these forms may vary slightly depending on your internet browser, but the differences are minor (and the process itself is fairly easy):
                    <br/><br/>
                    Upon clicking the respective form link above, a new tab containing the form PDF should open. Look for the printer icon in the PDF reader window, and it should lead you through the process of printing. If you'd prefer to save the document, use the 'download' button instead.
                </div>
            </div>

            <div>
                <h2>Form FAQs</h2>
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
		</div>
    );
};