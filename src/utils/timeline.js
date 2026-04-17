export const getTimeline=()=>{
    const saved=localStorage.getItem("timeline");
    return saved?JSON.parse(saved):[];
};
export const saveTimeline=(timeline)=>{
    localStorage.setItem("timeline",JSON.stringify(timeline));
};
export const addTimeline=(entry)=>{
    const oldTimeline=getTimeline();
    const updateTimeline=[entry,...oldTimeline];
    saveTimeline(updateTimeline);
};
