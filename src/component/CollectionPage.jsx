import Collection from "./Collection"
import items from "./items"

function CollectionPage() {

  const collectionElement = items.map((item, index) => {
    return <Collection key={index} item={item} />
  })

  return (
    <>
      <div className="py-16">
        <div className="font-bold text-6xl py-8 mb-8 text-center">
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {collectionElement}
        </div>
      </div>
    </>
  )
}

export default CollectionPage
