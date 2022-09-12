const core = require('@actions/core');
const github = require('@actions/github');

try {
  const formData = JSON.parse(core.getInput('form-data'));
  console.log(formData);
  
  const id = formData['identity-number'].text
  core.setOutput("id", id);  
  core.setOutput("readme", "# " + id);

  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}