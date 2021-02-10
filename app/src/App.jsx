import React from 'react';
import styled from 'styled-components';


const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95vh;
`;

function App() {
	return (
		<Page>
			<h1>Bem vindo ao EnfaseLabs Academy!</h1>
		</Page>
	)
}

export default App;