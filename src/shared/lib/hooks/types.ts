import { useSingleTagSelection } from '@/shared/lib/hooks/useTagSelection';

type UpdateTag<T extends string> = ReturnType<typeof useSingleTagSelection<T>>['updateTag'];

export default UpdateTag;
