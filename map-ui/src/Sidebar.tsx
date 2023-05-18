import { RestaurantReview } from "./restaurant_review"

export interface SidebarProps {
    reviews: RestaurantReview[];
}

export function Sidebar(props: SidebarProps) {
    return <div className="sidebar">
        {
            props.reviews ? props.reviews.map((review) => {
                return <div key={"sidebar_review_" + review.articleId}>
                    <h2>{review.title}</h2>
                    {review.headerImageUrl ? <img src={review.headerImageUrl} /> : null}
                    <p>{review.priceSentences}</p>
                    <p>
                        <a href={`https://www.theguardian.com/${review.articleId}`}>Read review</a>
                    </p>
                </div>
            }) : <p>No reviews to show...</p>
        }
    </div>
}
