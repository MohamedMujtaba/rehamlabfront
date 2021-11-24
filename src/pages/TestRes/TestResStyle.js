import styled from "styled-components";
export const Top = styled.div`
  height: 90px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  @media screen {
    & {
      display: none;
    }
  }
  @media print  {
    & {
      display: flex;
    }
  }
`;
export const Dit = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin-top: 100px;
`;
export const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;
export const TableRow = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid #f4f4f4;
  margin: 3px;
  p {
    width: 30%;
    text-align: center;
    font-size: 15px;
  }
`;
export const Block = styled.div`
  break-inside: avoid-page;
  break-before: avoid-page;
  break-after: avoid-page;
  width: 100%;
`
export const Footer = styled.div`
  width: 50px;
  height: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  right: 0;
  
  p{
transform: rotate(90deg);
display: inline;
word-wrap:normal;
width: 100%;
height: 100%;
  }
  @media print {
    &{
      display: flex;
    }
  }
`