const keys = require('../../config/keys');

module.exports = survey => {
  return `
	<html>
		<body>
			<div style="text-align: center">
			    <h3>Hello, World!</h3>
			    <p>We're just getting started...</p>
			    <p>${survey.body}</p>
                <div>
                    <a href="${
                      keys.redirectDomain.url
                    }/api/surveys/thanks">Yes</a>
                    <a href="${
                      keys.redirectDomain.url
                    }/api/surveys/thanks">No</a>
                </div>
            </div>
        </body>
    </html>
`;
};
