import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FormInput from './components/FormInput.js'
import BasicSelect from './components/FormSelect.js';
import FormRadioGroup3 from './components/FormRadioGroup3.js';
import FormRadioGroup4 from './components/FormRadioGroup4.js';
import FormButton from './components/FormButton';
import FormReviewOne from './components/FormReviewOne';
import FormReviewTwo from './components/FormReviewTwo';
import FormInputMultiline from './components/FormInputMultiline';

class All extends React.Component {
    render() {
      return (
        <div className="all">
          <div className="form-section">
            <h1>QSCP2022 - Abstract submission</h1>
            <div className="Presentation">
                <FormInput label="Presentation title" variant="outlined"/>
                <FormRadioGroup3 name="Presentation type" valueOne="Invited talk" valueTwo="Oral presentation" valueThree="Poster" labelOne="Invited talk" labelTwo="Oral presentation" labelThree="Poster" />
            </div>
            <div className="Affiliations">
                <h3>Affilations:</h3>
                <FormInput label="Enter affiliation of an author here" variant="outlined"/>
                <FormButton name="ADD AN AFFILATION" icon="add" />
                <FormReviewOne name="Affilations" />
                <FormButton name="REMOVE AN AFFILATION" icon="remove" />
            </div>
            <div className="Authors">
                <h3>Authors:</h3>
                <FormInput label="Co-author" variant="outlined"/>
                <BasicSelect />
                <FormButton name="Add an author" icon="add" />
                <FormReviewTwo nameOne="Author" nameTwo="Affilation" />
            </div>    
            <div className="References">
                <h3>References:</h3>
                <FormRadioGroup4 name="Add a reference to:" valueOne="journal" valueTwo="website" valueThree="book" valueFour="other" labelOne="journal" labelTwo="website" labelThree="poster" labelFour="other" />
                <FormButton name="Add a reference" icon="add" />
                <FormReviewTwo nameOne="Citation Index" nameTwo="Reference" />
                <FormButton name="Remove a reference" icon="remove" />
            </div>     
            <div className="Figures">
              <h3>Figures:</h3>
              <FormButton name="Browse..." icon="" browse="true" />
              <FormButton name="Add a figure" icon="add" />
              <FormReviewTwo nameOne="Filename" nameTwo="Preview" />
              <FormButton name="Remove File" icon="remove" />
              
            </div>   
            <div className="Abstract">
              <h3>Abstract:</h3>
              <FormInputMultiline />
            </div>                     
          </div>
          <div className="pdf-section">

          </div>
        </div>
      );
    }
  }
  
 
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<All />);
  