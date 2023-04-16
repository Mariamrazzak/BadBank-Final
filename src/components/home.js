/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/img-redundant-alt */
function Home(){
  return (
    <center><Card
      txtcolor="black"
      bgcolor="black"
      header="Bad Bank"
      title="Welcome to the First Virtual Bad Bank"
      text=" The one and only Bad Bank !"
      body={(<img src="public/bank.jpg" className="img-fluid" alt="Responsive image"/>)}
    /></center>    
  );  
}