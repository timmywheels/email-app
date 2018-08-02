module.exports = survey => {
	return `
	<html>
		<body>
			<div style="text-align: center">
			    <h3>Hello, World!</h3>
			    <p>We're just getting started...</p>
			    <p>${survey.body}</p>
                <div>
                    <a href="http://localhost:3000">Yes</a>
                    <a href="http://localhost:3000">No</a>
                </div>
            </div>
        </body>
    </html>
`;
};
