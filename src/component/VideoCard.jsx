
const VideoCard = ({ info }) => {

    if (!info) {
        return <div>Loading...</div>;
    }

    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    return (
        <div className=" p-2 m-2 w-[400px] cursor-pointer">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg w-full object-cover" />
            <ul>
                <li className="font-bold py-1">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}

export default VideoCard