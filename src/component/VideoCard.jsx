import numeral from "numeral";
const VideoCard = ({ info }) => {

    if (!info) {
        return <div>Loading...</div>;
    }
    const { snippet, statistics } = info
    const { channelTitle, title, thumbnails } = snippet
    const formattedViewCount = numeral(statistics.viewCount).format('0a');
    return (
        <div className=" p-2 m-2 w-72 cursor-pointer ">
            <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg w-full object-cover" />
            <ul>
                <li className="font-bold py-1 text-ellipsis line-clamp-2">{title}</li>
                <li className="text-gray-700 text-base">{channelTitle}</li>
                <li className="text-gray-700 text-base">{formattedViewCount.toLocaleUpperCase()} views</li>
            </ul>
        </div>
    )
}
export default VideoCard