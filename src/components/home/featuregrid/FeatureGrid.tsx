import { featureGridLinks } from "../../../constants/links";

export const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-6 mb-16 lg:grid-cols-4 lg:gap-5">
      {featureGridLinks.map((link) => (
        <div key={link.id} className="flex items-center gap-6">
          {link.icon}
          <div key={link.id} className="space-y-1">
            <p className="font-semibold">{link.title}</p>
            <p className="text-sm">{link.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
    