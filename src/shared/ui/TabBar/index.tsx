export default function TabBar({ tabs, currTabIndex }: { tabs: string[]; currTabIndex: number }) {
  return (
    <nav>
      <ul>
        {tabs.map((tab, i) => (
          <li>
            <button
              className={`${currTabIndex === i ? 'border-gray-900 text-gray-900' : 'border-gray-300 text-gray-600'} border-b py-9 text-xs`}
              type="button"
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
