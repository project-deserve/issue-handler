const core = require("@actions/core");
const github = require("@actions/github");
const {v1: uuidv1} = require('uuid');
const fs = require('fs');

/*
const core = {
	//getInput: function(name) {return {'form-data': '{"email":{"title":"Email","content":["femi@uk2.net"],"text":"femi@uk2.net"},"display-name":{"title":"Display Name","content":["Femi Ayorinde"],"text":"Femi Ayorinde"},"date-of-birth":{"title":"Date of Birth","content":["1957/12/24"],"text":"1957/12/24"},"gender":{"title":"Gender","content":["Male"],"text":"Male"},"weight":{"title":"Weight","content":["*No response*"],"text":"*No response*"},"height":{"title":"Height","content":["*No response*"],"text":"*No response*"},"blood-pressure":{"title":"Blood Pressure","content":["*No response*"],"text":"*No response*"},"medical-history":{"title":"Medical History","content":["*No response*"],"text":"*No response*"},"public-liability":{"title":"Public Liability","content":[],"text":"*   [x] Confirm","list":[[null]]}}'}[name]},
	getInput: function(name) {return {'form-data': '{   "identity-number": {     "title": "Identity Number",     "content": [ "691b1821-5ce4-40e3-a7c4-8cf6c086be09" ],     "text": "691b1821-5ce4-40e3-a7c4-8cf6c086be09"   },   "reason-for-the-appointment": {     "title": "Reason for the appointment",     "content": [ "Developed a condition" ],     "text": "Developed a condition"   },   "medical-condition": {     "title": "Medical Condition",     "content": [ "c-3 - zzzzzzzzzzzzz" ],     "text": "c-3 - zzzzzzzzzzzzz"   },   "medical-illness": {     "title": "Medical illness",     "content": [ "i-3 - yyyyyyyyyyy" ],     "text": "i-3 - yyyyyyyyyyy"   },   "weight": { "title": "Weight", "content": [ "52" ], "text": "52" },   "height": { "title": "Height", "content": [ "5/6" ], "text": "5/6" },   "blood-pressure": { "title": "Blood Pressure", "content": [ "150" ], "text": "150" },   "additional-information": {     "title": "Additional Information",     "content": [],     "lang": "markdown",     "text": "```markdown\\nI am very tired ofthen\\n```"   },   "method-of-communication": {     "title": "Method of Communication",     "content": [ "Video Conference" ],     "text": "Video Conference"   },   "code-of-conduct": {     "title": "Code of Conduct",     "content": [],     "text": "*   [x] Confirmation"   },   "expectation": {     "title": "Expectation",     "content": [],     "text": "*   [x] Confirmation"   } }'}[name]},
	setOutput: function(name, value) {console.log(value)},
	setFailed: function(error) {console.error(error)}
}

const github = {
	context: {
		payload: {   "action": "opened",   "issue": {     "active_lock_reason": null,     "assignee": null,     "assignees": [],     "author_association": "CONTRIBUTOR",     "body": "### Identity Number\n\n691b1821-5ce4-40e3-a7c4-8cf6c086be09\n\n### Display Name\n\nFemi Ayorinde\n\n### Date of Birth\n\n1957/12/24\n\n### Gender\n\nMale\n\n### Weight\n\n_No response_\n\n### Height\n\n_No response_\n\n### Blood Pressure\n\n_No response_\n\n### Medical History\n\n_No response_\n\n### Public Liability\n\n- [X] Confirm",     "closed_at": null,     "comments": 0,     "comments_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/49/comments",     "created_at": "2022-09-12T21:16:12Z",     "events_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/49/events",     "html_url": "https://github.com/project-deserve/clinic-alpha-one/issues/49",     "id": 1370526152,     "labels": [],     "labels_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/49/labels{/name}",     "locked": false,     "milestone": null,     "node_id": "I_kwDOH2SoT85RsJHI",     "number": 49,     "performed_via_github_app": null,     "reactions": {       "+1": 0,       "-1": 0,       "confused": 0,       "eyes": 0,       "heart": 0,       "hooray": 0,       "laugh": 0,       "rocket": 0,       "total_count": 0,       "url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/49/reactions"     },     "repository_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one",     "state": "open",     "state_reason": null,     "timeline_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/49/timeline",     "title": "Create Personal Health Record",     "updated_at": "2022-09-12T21:16:12Z",     "url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/49",     "user": {       "avatar_url": "https://avatars.githubusercontent.com/u/110731?v=4",       "events_url": "https://api.github.com/users/deleolajide/events{/privacy}",       "followers_url": "https://api.github.com/users/deleolajide/followers",       "following_url": "https://api.github.com/users/deleolajide/following{/other_user}",       "gists_url": "https://api.github.com/users/deleolajide/gists{/gist_id}",       "gravatar_id": "",       "html_url": "https://github.com/deleolajide",       "id": 110731,       "login": "deleolajide",       "node_id": "MDQ6VXNlcjExMDczMQ==",       "organizations_url": "https://api.github.com/users/deleolajide/orgs",       "received_events_url": "https://api.github.com/users/deleolajide/received_events",       "repos_url": "https://api.github.com/users/deleolajide/repos",       "site_admin": false,       "starred_url": "https://api.github.com/users/deleolajide/starred{/owner}{/repo}",       "subscriptions_url": "https://api.github.com/users/deleolajide/subscriptions",       "type": "User",       "url": "https://api.github.com/users/deleolajide"     }   },   "organization": {     "avatar_url": "https://avatars.githubusercontent.com/u/111590499?v=4",     "description": "Everyone deserves access to healthcare",     "events_url": "https://api.github.com/orgs/project-deserve/events",     "hooks_url": "https://api.github.com/orgs/project-deserve/hooks",     "id": 111590499,     "issues_url": "https://api.github.com/orgs/project-deserve/issues",     "login": "project-deserve",     "members_url": "https://api.github.com/orgs/project-deserve/members{/member}",     "node_id": "O_kgDOBqa8Yw",     "public_members_url": "https://api.github.com/orgs/project-deserve/public_members{/member}",     "repos_url": "https://api.github.com/orgs/project-deserve/repos",     "url": "https://api.github.com/orgs/project-deserve"   },   "repository": {     "allow_forking": true,     "archive_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/{archive_format}{/ref}",     "archived": false,     "assignees_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/assignees{/user}",     "blobs_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/git/blobs{/sha}",     "branches_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/branches{/branch}",     "clone_url": "https://github.com/project-deserve/clinic-alpha-one.git",     "collaborators_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/collaborators{/collaborator}",     "comments_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/comments{/number}",     "commits_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/commits{/sha}",     "compare_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/compare/{base}...{head}",     "contents_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/contents/{+path}",     "contributors_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/contributors",     "created_at": "2022-08-19T17:09:46Z",     "default_branch": "main",     "deployments_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/deployments",     "description": "Alpha One - Our first virtual clinic",     "disabled": false,     "downloads_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/downloads",     "events_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/events",     "fork": false,     "forks": 0,     "forks_count": 0,     "forks_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/forks",     "full_name": "project-deserve/clinic-alpha-one",     "git_commits_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/git/commits{/sha}",     "git_refs_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/git/refs{/sha}",     "git_tags_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/git/tags{/sha}",     "git_url": "git://github.com/project-deserve/clinic-alpha-one.git",     "has_downloads": true,     "has_issues": true,     "has_pages": false,     "has_projects": true,     "has_wiki": true,     "homepage": "",     "hooks_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/hooks",     "html_url": "https://github.com/project-deserve/clinic-alpha-one",     "id": 526690383,     "is_template": false,     "issue_comment_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/comments{/number}",     "issue_events_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues/events{/number}",     "issues_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/issues{/number}",     "keys_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/keys{/key_id}",     "labels_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/labels{/name}",     "language": "JavaScript",     "languages_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/languages",     "license": {       "key": "mit",       "name": "MIT License",       "node_id": "MDc6TGljZW5zZTEz",       "spdx_id": "MIT",       "url": "https://api.github.com/licenses/mit"     },     "merges_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/merges",     "milestones_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/milestones{/number}",     "mirror_url": null,     "name": "clinic-alpha-one",     "node_id": "R_kgDOH2SoTw",     "notifications_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/notifications{?since,all,participating}",     "open_issues": 6,     "open_issues_count": 6,     "owner": {       "avatar_url": "https://avatars.githubusercontent.com/u/111590499?v=4",       "events_url": "https://api.github.com/users/project-deserve/events{/privacy}",       "followers_url": "https://api.github.com/users/project-deserve/followers",       "following_url": "https://api.github.com/users/project-deserve/following{/other_user}",       "gists_url": "https://api.github.com/users/project-deserve/gists{/gist_id}",       "gravatar_id": "",       "html_url": "https://github.com/project-deserve",       "id": 111590499,       "login": "project-deserve",       "node_id": "O_kgDOBqa8Yw",       "organizations_url": "https://api.github.com/users/project-deserve/orgs",       "received_events_url": "https://api.github.com/users/project-deserve/received_events",       "repos_url": "https://api.github.com/users/project-deserve/repos",       "site_admin": false,       "starred_url": "https://api.github.com/users/project-deserve/starred{/owner}{/repo}",       "subscriptions_url": "https://api.github.com/users/project-deserve/subscriptions",       "type": "Organization",       "url": "https://api.github.com/users/project-deserve"     },     "private": false,     "pulls_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/pulls{/number}",     "pushed_at": "2022-09-12T21:15:40Z",     "releases_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/releases{/id}",     "size": 28196,     "ssh_url": "git@github.com:project-deserve/clinic-alpha-one.git",     "stargazers_count": 1,     "stargazers_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/stargazers",     "statuses_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/statuses/{sha}",     "subscribers_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/subscribers",     "subscription_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/subscription",     "svn_url": "https://github.com/project-deserve/clinic-alpha-one",     "tags_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/tags",     "teams_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/teams",     "topics": [],     "trees_url": "https://api.github.com/repos/project-deserve/clinic-alpha-one/git/trees{/sha}",     "updated_at": "2022-09-10T11:59:38Z",     "url": "https://api.github.com/repos/project-deserve/clinic-alpha-one",     "visibility": "public",     "watchers": 1,     "watchers_count": 1,     "web_commit_signoff_required": false   },   "sender": {     "avatar_url": "https://avatars.githubusercontent.com/u/110731?v=4",     "events_url": "https://api.github.com/users/deleolajide/events{/privacy}",     "followers_url": "https://api.github.com/users/deleolajide/followers",     "following_url": "https://api.github.com/users/deleolajide/following{/other_user}",     "gists_url": "https://api.github.com/users/deleolajide/gists{/gist_id}",     "gravatar_id": "",     "html_url": "https://github.com/deleolajide",     "id": 110731,     "login": "deleolajide",     "node_id": "MDQ6VXNlcjExMDczMQ==",     "organizations_url": "https://api.github.com/users/deleolajide/orgs",     "received_events_url": "https://api.github.com/users/deleolajide/received_events",     "repos_url": "https://api.github.com/users/deleolajide/repos",     "site_admin": false,     "starred_url": "https://api.github.com/users/deleolajide/starred{/owner}{/repo}",     "subscriptions_url": "https://api.github.com/users/deleolajide/subscriptions",     "type": "User",     "url": "https://api.github.com/users/deleolajide"   } }
	}
}
*/

try {
	if (github.context.payload.issue) {
		const issueId = github.context.payload.issue.id;	
		const formData = JSON.parse(core.getInput("form-data"));
		console.log(`Issue: ${issueId}`);
		
		const identityNumber = formData["identity-number"];
	  
		if (!identityNumber) {
		  createHeathRecord(formData);
		} else {
		  updateHealthRecord(identityNumber.text, formData);
		}
	}
	
} catch (error) {
  core.setFailed(error.message);
} 


function updateHealthRecord(id, formData) {
	const issueId = github.context.payload.issue.id;		
	const now = (new Date()).toISOString().split('T')[0];
	const fileName = "Personal Health Records/" + id + "/readme.md";
	const rawdata = fs.readFileSync(fileName, 'utf8');
	console.log("updateHealthRecord", id, fileName);
	
	const healthRecord = rawdata.toString().split("# Illnesses");
	
	const rsn = formData["reason-for-the-appointment"].text;
	const cdn = formData["medical-condition"].text;
	const ill = formData["medical-illness"].text;
	const wgt = formData["weight"].text;
	const hgt = formData["height"].text;
	const bp = formData["blood-pressure"].text;
	const info = formData["additional-information"].text;  	
	const comm = formData["method-of-communication"].text; 
	
	const md = `<a href="https://github.com/project-deserve/project-deserve.github.io/issues/${issueId}">${now}</a>`	
	const visit = `| ${md} | ${rsn} | ${cdn} | ${ill} | ${wgt} | ${hgt} | ${bp} | ${comm} | \n`;
	
	const readme = healthRecord[0].substring(0, healthRecord[0].length - 2) + visit + "\n# Illnesses" + healthRecord[1];
	core.setOutput("id", id);  	  
	fs.writeFileSync(fileName, readme);	
}	

function createHeathRecord(formData) {
	let id = uuidv1();
	const dirName = "Personal Health Records/" + id;	
	const fileName = dirName + '/readme.md';		
	const cd = (new Date()).toISOString().split('T')[0];
	const em = formData["email"].text;
	const dn = formData["display-name"].text;
	const dob = formData["date-of-birth"].text;
	const gen = formData["gender"].text; 
	const wgt = formData["weight"].text;
	const hgt = formData["height"].text;
	const bp = formData["blood-pressure"].text;
	const mh = formData["medical-history"].text;    

	core.setOutput("id", id);  	  
	const readme = 
`
# ${id}

# Personal Details

| Name | Email | Created | Birth |
| ---  | ---   | ---     | ---   |
| ${dn}| ${em} | ${cd}   | ${dob}|

# Visits

| Date | Reason | Condition | Illness | Weight | Height | Blood Pressure | Communication | 
| --- | --- | --- | --- | --- | --- | --- | --- | 

# Illnesses

| Id | Type | Start Date | End Date | Created | Updated | Medication Taken |  
| --- | --- | --- | --- | --- | --- | --- | 


# Activities

| Id | Type | Date | Time | Weight | Reps | Sets | Duration | Heart Rate | Calories Burned |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |


# Conditions

| Id | Start Date | End Date | Medication Taken |  
| --- | --- | --- | --- |


# Medications<a id=meds></a>

| Id | Type | Start Date | Description |
| --- | --- | --- | --- | 


# Treatements

| Id | Name | Start Date | End Date | Teatment Provider |  
| --- | --- | --- | --- | -- |
`

	if (!fs.existsSync(dirName)){
		fs.mkdirSync(dirName);
	}
	fs.writeFileSync(fileName, readme);	
}
