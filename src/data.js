export const API_KEY = 'AIzaSyAT0sAnum5I0j7azOOyq9rll6n7ZLaau2E';

export const value_converter = (value) =>  {
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}