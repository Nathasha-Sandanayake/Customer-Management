
import './App.css';
import Customer from './Customer.tsx';


const customers=[
  {
    id:'1',
    avatar:'https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?ga=GA1.1.600886959.1731223245',
    customerName:'Freddy',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    userProfile:'https://www.freepik.com/'
  },

  {
    id:'2',
    avatar:'https://img.freepik.com/free-vector/cute-boy-with-peace-sign-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3946.jpg?ga=GA1.1.600886959.1731223245',
    customerName:'Hiroki',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    userProfile:'https://www.freepik.com/'
  },

  {
    id:'3',
    avatar:'https://img.freepik.com/free-vector/cute-girl-with-peace-sign-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3977.jpg?ga=GA1.1.600886959.1731223245',
    customerName:'Mimi',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    userProfile:'https://www.freepik.com/'
  },

  {
    id:'4',
    avatar:'https://img.freepik.com/free-vector/angry-gamer-boy-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3984.jpg?ga=GA1.1.600886959.1731223245',
    customerName:'Peter',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    userProfile:'https://www.freepik.com/'
  },

  {
    id:'5',
    avatar:'https://img.freepik.com/free-vector/cute-boy-holding-indonesian-flag-cartoon-vector-icon-illustration-people-holiday-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3820.jpg?ga=GA1.1.600886959.1731223245',
    customerName:'Chika',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    userProfile:'https://www.freepik.com/'
  }
]

function App() {
  return (
    <>
      <h1>Customer Data</h1>
      <hr/>
      {customers.map((data)=>(
              <Customer id={data.id}
              customerName={data.customerName}
              userProfile={data.userProfile}
              description={data.description}
              avatar={data.avatar}
              key={data.id} 
              />
      ))}
     
    </>
    );
  
}

export default App;

