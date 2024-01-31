import axios from 'axios';

export const baseurl ='https://hacker-news.firebaseio.com/v0/';
export const newstoriesURL = `${baseurl}newstories.json`;
export const storyURL = `${baseurl}item/`;
export const getStory = async (storyID)=>{
    const result = await axios.get(`${storyURL} + ${storyID}.json`).then(({data})=>data);
    return result;
}
export const getStoryIDs = async()=>{
    const result = await axios.get(newstoriesURL).then(({data})=>data);
    return result;
}