type TagType = 'nuevo' | 'agotado'

interface Props {
    contentTag: TagType;
}

const getTagColor = (content: TagType) => {
  const lowerContent = content.toLowerCase()
  if (lowerContent === 'nuevo'){
    return 'bg-green-500'
  }
  if (lowerContent === 'agotado'){
    return 'bg-red-500'
  }
  return 'bg-gray-500'
}

export const Tag = ({contentTag}: Props) => {
  return (
    <div
      className={`text-white w-fit px-2 py-2 ${getTagColor(contentTag)}`}
    >
      <p className="uppercase text-xs font-medium">
        {contentTag}
      </p>
    </div>
  )
}

