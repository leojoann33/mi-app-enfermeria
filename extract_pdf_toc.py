
import sys
import json

def extract_toc(pdf_path):
    try:
        import pypdf
        reader = pypdf.PdfReader(pdf_path)
    except ImportError:
        try:
            import PyPDF2
            reader = PyPDF2.PdfFileReader(pdf_path)
        except ImportError:
            print(json.dumps({"error": "No PDF library found (pypdf or PyPDF2)"}))
            return

    try:
        # Try to get outlines/bookmarks
        outlines = reader.outline
        if not outlines:
            print(json.dumps({"error": "No outline found in PDF"}))
            return
            
        toc = []
        def parse_outline(outline_items, level=0):
            for item in outline_items:
                if isinstance(item, list):
                    parse_outline(item, level + 1)
                else:
                    # In PyPDF2/pypdf, items might be Destination objects
                    title = item.title if hasattr(item, 'title') else str(item)
                    page = -1
                    if hasattr(item, 'page'):
                         # Page handling varies between versions, simplistic approach
                         page = 0 
                    toc.append({"title": title, "level": level})
        
        parse_outline(outlines)
        print(json.dumps(toc, indent=2))
        
    except Exception as e:
        print(json.dumps({"error": str(e)}))

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf_toc.py <path_to_pdf>")
        sys.exit(1)
    
    extract_toc(sys.argv[1])
