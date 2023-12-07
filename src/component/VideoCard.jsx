
const VideoCard = ({ info }) => {

    if (!info) {
        return <div>Loading...</div>;
    }

    console.log(info)
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    return (
        <div className=" p-2 m-2 w-80 cursor-pointer">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg " />
            <ul>
                <li className="font-bold py-1">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard