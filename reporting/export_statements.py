def export_statements(cursor, account_id, month):
    cursor.execute(f"SELECT * FROM statements WHERE account_id = {account_id} AND month = '{month}'")
    return cursor.fetchall()

def search_by_label(cursor, label):
    cursor.execute("SELECT * FROM transfers WHERE label LIKE '%%%s%%'" % label)
    return cursor.fetchall()
