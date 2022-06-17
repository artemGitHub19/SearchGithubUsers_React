import { Octokit as OctokitRest } from "@octokit/rest";
import { Octokit as OctokitCore } from "@octokit/core";

const authKey = '';

export default class GitHubService {
    static async getUserInformation(userName) {

        const octokit = new OctokitCore({auth: authKey});

        let response = await octokit.request(`GET /users/${userName}`, {
            username: 'USERNAME'
        });    

        let userData = response['data'];
       
        let userDataToDisplay =  {
            login: userData['login'], 
            name: userData['name'],
            followers: userData['followers'],
            following: userData['following'],
            photoUrl: userData['avatar_url'],
            profile: userData['html_url'],
            publicRepositories: userData['public_repos']
        };       

        return userDataToDisplay;
    }

    static async getRepositories(userName) {

        const octokit = new OctokitRest({auth: authKey});

        let response = await octokit.paginate(`GET /users/${userName}/repos`, {
            username: 'USERNAME',
            sort: 'pushed',
            per_page: '50'
        });

        let repositoriesInfo = response.map( repository => 
            ({                
                name: repository.name,
                description: repository.description,
                repository: repository.html_url
            })
        );     

        return repositoriesInfo;
    }
}