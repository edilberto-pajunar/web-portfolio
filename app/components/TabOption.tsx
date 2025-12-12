"use client";

type TabOptionProps = {
  onClose: () => void;
  title: string;
  tabs?: string[];
  onTabClicked?: (id: string) => void;
  onTabClose?: (id: string) => void;
  onAddTab?: () => void;
  activeTab?: string | null;
};

export default function TabOption({
  onClose,
  title,
  tabs,
  onTabClicked,
  activeTab,
  onTabClose,
  onAddTab,
}: TabOptionProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-t-lg border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600"
          />
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600" />
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600" />
        </div>
        <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">
          {title}
        </span>
        {tabs && tabs.length > 0 && (
          <div className="flex items-center gap-1 py-1dark:bg-gray-850  dark:border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabClicked?.(tab)}
                className={`
                relative px-24 py-1.5 rounded-t-lg text-sm font-medium transition-all
                ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm"
                    : "opacity-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
              >
                <div className="flex items-center justify-between gap-2">
                  <span>{tab}</span>

                  {activeTab === tab && (
                    <span
                      className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onTabClose?.(tab);
                      }}
                    >
                      ×
                    </span>
                  )}
                </div>
              </button>
            ))}
            <button
              onClick={onAddTab}
              className="px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 text-lg"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
