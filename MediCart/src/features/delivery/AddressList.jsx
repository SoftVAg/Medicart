import React from 'react';

export const AddressList = ({
  addresses,
  selectedId,
  onSelect,
  onEdit,
  onDelete,
  onSetDefault,
}) => {
  if (!addresses || addresses.length === 0) return null;

  return (
    <div style={styles.list}>
      {addresses.map(a => {
        const selected = selectedId === a.id;

        return (
          <div
            key={a.id}
            style={{
              ...styles.card,
              borderColor: selected ? '#2fbf5d' : '#ddd',
              background: selected ? '#f3fff8' : '#fff',
            }}
            onClick={() => onSelect(a.id)}
          >
            {/* Header */}
            <div style={styles.header}>
              <div style={styles.leftHeader}>
                <span style={styles.radio(selected)} />
                <span style={styles.label}>{a.label}</span>
                {a.isDefault && <span style={styles.defaultTag}>Default</span>}
              </div>
            </div>

            {/* Body */}
            <div style={styles.body}>
              <div style={styles.name}>{a.name}</div>
              <div style={styles.phone}>{a.phone}</div>
              <div style={styles.address}>
                {a.addressLine1}
                {a.addressLine2 && `, ${a.addressLine2}`}
              </div>
              <div style={styles.address}>
                {a.city}, {a.state} – {a.pincode}
              </div>
            </div>

            {/* Actions */}
            <div
              style={styles.actions}
              onClick={e => e.stopPropagation()}
            >
              <button style={styles.linkBtn} onClick={() => onEdit(a.id)}>
                Edit
              </button>
              <button style={styles.linkBtn} onClick={() => onDelete(a.id)}>
                Delete
              </button>
              {!a.isDefault && (
                <button
                  style={styles.linkBtn}
                  onClick={() => onSetDefault(a.id)}
                >
                  Set Default
                </button>
              )}
              <button
                style={{
                  ...styles.primaryBtn,
                  opacity: selected ? 1 : 0.9,
                }}
                onClick={() => onSelect(a.id)}
              >
                Deliver Here
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* Styles */
const styles = {
  list: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: 14,
  },

  card: {
    border: '2px solid #ddd',
    borderRadius: 12,
    padding: 16,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  leftHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },

  radio: (active) => ({
    width: 16,
    height: 16,
    borderRadius: '50%',
    border: '2px solid #2fbf5d',
    background: active ? '#2fbf5d' : '#fff',
  }),

  label: {
    fontSize: 12,
    padding: '2px 8px',
    borderRadius: 6,
    background: '#eef2ff',
    color: '#3b4cca',
    fontWeight: 600,
  },

  defaultTag: {
    fontSize: 12,
    padding: '2px 8px',
    borderRadius: 6,
    background: '#e6ffed',
    color: '#067d40',
    fontWeight: 600,
  },

  body: {
    fontSize: 14,
    lineHeight: 1.5,
    marginBottom: 12,
  },

  name: {
    fontWeight: 600,
    fontSize: 15,
  },

  phone: {
    color: '#555',
    marginBottom: 4,
  },

  address: {
    color: '#444',
  },

  actions: {
    display: 'flex',
    gap: 10,
    flexWrap: 'wrap',
    alignItems: 'center',
  },

  linkBtn: {
    background: 'transparent',
    border: 'none',
    color: '#2fbf5d',
    fontSize: 13,
    cursor: 'pointer',
    padding: 0,
  },

  primaryBtn: {
    marginLeft: 'auto',
    background: '#2fbf5d',
    color: '#fff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
    cursor: 'pointer',
  },
};

export default AddressList;
