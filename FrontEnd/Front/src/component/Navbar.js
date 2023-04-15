import { Link } from "react-router-dom";
import styled from 'styled-components';

// import styled from "styled-components";

const Navbar =()=> {

    return (


        <NavC >
            <NavLink to='/Login'>Login</NavLink>
            <NavLink to='/StudentRegistration'>Student Register</NavLink>
            <NavLink to='/TeacherRegistration'>Teacher Register</NavLink>
        </NavC>

    )
}
export default Navbar;


const NavLink = styled(Link)`
  text-decoration: none;
  margin: 10px;
  // margin-top: 70px;
  font-size: 30px;
  background-color: white;
  color: lightred;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 0px 5px 10px black; 
  // display: block;
 
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 20px lightgrey;
 
 }
`;

const NavC = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
top: 0px;
// background: red;
  padding: 10px;
  // text-align: right;
  // margin-top: -680px;
  margin-top:5px;

  // margin-right: -954px;


  
`;

const OuterDiv = styled.div `
  display: 'flex';
  flex: 1;
  flex-direction: 'row',
  width: 500px;
  height: 100px;
`




