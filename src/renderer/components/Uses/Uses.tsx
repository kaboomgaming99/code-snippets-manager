import { Flex, Text } from '@chakra-ui/react';
import { CodeIcon } from '@codiga/components';

type UsesProps = {
  count?: number;
};

export default function Uses({ count = 0 }: UsesProps) {
  return (
    <Flex alignItems="center" gap="space_8">
      <CodeIcon />
      <Text size="xs" noOfLines={1}>
        {count}
      </Text>
    </Flex>
  );
}
