import { View, StyleSheet } from "react-native";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";

type Props = {
  onRefreshBtn: () => void,
  onPlusBtn: () => void,
  onSaveBtn: () => void,
};

export default function AppOptions({ onRefreshBtn, onPlusBtn, onSaveBtn }: Props) {
  return (
    <View style={styles.optionsContainer}>
      <View style={styles.optionsRow}>
        <IconButton icon="refresh" label="Reset" onPress={onRefreshBtn} />
        <CircleButton onPress={onPlusBtn} />
        <IconButton icon="save-alt" label="Save" onPress={onSaveBtn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
