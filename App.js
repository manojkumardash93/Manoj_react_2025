import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for ReactDOM in React 18+
 
const resobj = {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "222436",
          "name": "Adda Unplugged",
          "cloudinaryImageId": "rj3j90yz6vvxzlsr1z5f",
          "locality": "Janpath",
          "areaName": "Satya Nagar",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Chinese",
            "Continental",
            "Indian",
            "Mexican"
          ],
          "avgRating": 4.5,
          "parentId": "18622",
          "avgRatingString": "4.5",
          "totalRatingsString": "3.2K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2025-01-13 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "textBased": {
                
              },
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80",
            "logoCtx": {
              "text": "BENEFITS"
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            },
            "commsStyling": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=222436&source=collection&query=Momos",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  };
const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className = "logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = () => {
    return (
        <div className="res-card">
            <img className = "res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/10/25/c2d9718f-c37a-446f-8e35-12be8bb51e34_a13e85d7-4021-4822-a3a5-14ad27cfdec4.JPG"/>
            <h4>Meghna Foods</h4>
            <h5>Biriyani, North Indian, Asian </h5>
            <h5>4.5 Stars</h5>
            <h5>38 Minutes</h5>
        </div>
    );
};
const Body = () => {
    return (
        <div className = "body">
            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard/>
            </div>
        </div>
    );
};
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root for rendering
 
root.render(<AppLayout/>); // Render the JSX heading
