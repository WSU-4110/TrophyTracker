import SectionTitle from '../Common/SectionTitle'
import SingleFeature from './SingleFeature'
import featuresData from './featuresData'

const Features = () => {
  return (
    <a id="features-section" className="dark:bg-dark pb-8 pt-20 lg:pb-[70px] lg:pt-[120px]">
      <div className="container">
        <SectionTitle
          subtitle="Features"
          title="TrophyTracker"
          paragraph="Discover the amazing features that TrophyTracker has to offer! Manage your games, trophies, and achievements with ease! Join the community and share your progress with others!"
        />

        <div className="-mx-4 mt-12 flex flex-wrap lg:mt-20">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </a>
  )
}

export default Features
